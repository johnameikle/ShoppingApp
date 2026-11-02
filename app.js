const DEFAULT_ROUTES = {
  morrisons: ["Fruit & vegetables","Herbs & chilled snacks","Bread & wraps","Sweets, crisps & cakes","Cupboard ingredients","Tinned food","Dairy","Vinegar & condiments","Meat","Frozen","Sauces","Laundry & cleaning","Other"],
  aldi: ["Fruit & vegetables","Bakery","Chilled","Meat","Cupboard ingredients","Tinned food","Dairy","Frozen","Drinks","Household","Other"],
  marks: ["Fruit & vegetables","Bakery","Food to go","Chilled","Meat","Cupboard ingredients","Dairy","Frozen","Treats","Household","Other"]
};
const STORE_NAMES = {morrisons:"Morrisons",aldi:"Aldi",marks:"M&S"};
const KEYWORDS = {
  "Fruit & vegetables":["banana","tomato","satsuma","orange","kiwi","avocado","onion","potato","apple","pear","lemon","lime","pepper","carrot","broccoli","mushroom","salad","lettuce","cucumber","fruit","vegetable"],
  "Herbs & chilled snacks":["rosemary","basil","coriander","parsley","beetroot","falafel","hummus"],
  "Bread & wraps":["bread","sourdough","wrap","pitta","garlic bread","roll","bagel"],
  "Bakery":["bread","sourdough","wrap","pitta","roll","bagel","croissant"],
  "Sweets, crisps & cakes":["sweet","crisp","jaffa","cake","biscuit","chocolate"],
  "Treats":["sweet","crisp","cake","biscuit","chocolate","dessert"],
  "Cupboard ingredients":["pasta","rice","flour","sugar","oil","cereal","egg","mayonnaise","stock","spice"],
  "Tinned food":["tuna","bean","sardine","tin","chickpea","soup"],
  "Dairy":["milk","cheese","butter","yoghurt","yogurt","cream","crème fraîche"],
  "Vinegar & condiments":["vinegar","mustard","relish"],
  "Meat":["ham","chicken","beef","pork","lamb","bacon","sausage","turkey"],
  "Frozen":["magnum","waffle","wedges","frozen","ice cream","peas"],
  "Sauces":["ketchup","sauce","mayonnaise"],
  "Laundry & cleaning":["softener","sponge","flash","cleaner","washing","laundry","bleach"],
  "Household":["softener","sponge","cleaner","washing","laundry","bleach","foil","tissue"],
  "Chilled":["falafel","hummus","salad","dip","ready meal"],
  "Food to go":["sandwich","snack","lunch","salad"],
  "Drinks":["water","juice","cola","coffee","tea","wine","beer"]
};
const QUICK_ITEMS = ["Bananas","Milk","Bread","Cheese","Tomatoes","Eggs"];

const initialState = {store:"morrisons",items:[],routes:structuredClone(DEFAULT_ROUTES)};
let state = loadState(); let deferredInstall;
const $ = id => document.getElementById(id);

function loadState(){try{const saved=JSON.parse(localStorage.getItem("shopping-state-v1"));return {...initialState,...saved,routes:{...structuredClone(DEFAULT_ROUTES),...(saved?.routes||{})}}}catch{return structuredClone(initialState)}}
function saveState(){localStorage.setItem("shopping-state-v1",JSON.stringify(state));$("saveStatus").textContent="Saved just now";setTimeout(()=>$("saveStatus").textContent="Saved on this device",1500)}
function classify(name,store){const route=state.routes[store];const lower=name.toLowerCase();for(const [section,words] of Object.entries(KEYWORDS)){if(route.includes(section)&&words.some(word=>lower.includes(word)))return section}return route.at(-1)}
function addItem(name,quantity=1){const clean=name.trim();if(!clean)return;state.items.push({id:crypto.randomUUID(),name:clean,quantity:Number(quantity),store:state.store,section:classify(clean,state.store),done:false});saveState();render();}
function storeItems(){return state.items.filter(item=>item.store===state.store)}

function renderTabs(){const nav=$("storeTabs");nav.innerHTML="";Object.entries(STORE_NAMES).forEach(([id,name])=>{const button=document.createElement("button");button.className="store-tab";button.textContent=name;button.setAttribute("aria-selected",String(id===state.store));button.onclick=()=>{state.store=id;saveState();render()};nav.append(button)})}
function renderSuggestions(){const box=$("suggestions");box.innerHTML="";QUICK_ITEMS.forEach(name=>{const button=document.createElement("button");button.className="suggestion";button.type="button";button.textContent=`+ ${name}`;button.onclick=()=>addItem(name);box.append(button)})}
function renderList(){const host=$("shoppingList");host.innerHTML="";const items=storeItems();const remaining=items.filter(i=>!i.done).length;$("remainingCount").textContent=`${remaining} ${remaining===1?"item":"items"}`;$("progressText").textContent=items.length?`${items.length-remaining} checked · ${STORE_NAMES[state.store]}`:"Nothing added yet";$("listSummary").textContent=`${STORE_NAMES[state.store]} · aisle order`;$("emptyState").hidden=items.length>0;$("clearDoneButton").disabled=!items.some(i=>i.done);
  state.routes[state.store].forEach((section,index)=>{const sectionItems=items.filter(item=>item.section===section);if(!sectionItems.length)return;const fragment=$("sectionTemplate").content.cloneNode(true);fragment.querySelector(".section-number").textContent=String(index+1).padStart(2,"0");fragment.querySelector("h2").textContent=section;fragment.querySelector(".section-heading p").textContent=`${sectionItems.length} ${sectionItems.length===1?"item":"items"}`;const list=fragment.querySelector(".item-list");sectionItems.forEach(item=>list.append(renderItem(item)));host.append(fragment)})}
function renderItem(item){const row=document.createElement("li");row.className=`shopping-item${item.done?" done":""}`;const check=document.createElement("input");check.type="checkbox";check.className="item-check";check.checked=item.done;check.setAttribute("aria-label",`Mark ${item.name} as ${item.done?"not done":"done"}`);check.onchange=()=>{item.done=check.checked;saveState();render()};const copy=document.createElement("div");copy.innerHTML=`<div class="item-name"></div><div class="item-meta">${STORE_NAMES[item.store]}</div>`;copy.querySelector(".item-name").textContent=item.name;const actions=document.createElement("div");actions.className="item-actions";actions.innerHTML=`<span class="quantity">×${item.quantity}</span>`;const remove=document.createElement("button");remove.className="remove-item";remove.textContent="×";remove.setAttribute("aria-label",`Remove ${item.name}`);remove.onclick=()=>{state.items=state.items.filter(i=>i.id!==item.id);saveState();render()};actions.append(remove);row.append(check,copy,actions);return row}
function renderLayout(){const list=$("layoutList");list.innerHTML="";const route=state.routes[state.store];$("layoutTitle").textContent=`${STORE_NAMES[state.store]} section order`;route.forEach((section,index)=>{const row=document.createElement("li");row.className="layout-row";row.innerHTML=`<span class="layout-position">${String(index+1).padStart(2,"0")}</span><strong></strong><span class="move-buttons"></span>`;row.querySelector("strong").textContent=section;const controls=row.querySelector(".move-buttons");[["↑",-1],["↓",1]].forEach(([label,direction])=>{const button=document.createElement("button");button.type="button";button.className="move-button";button.textContent=label;button.disabled=direction<0?index===0:index===route.length-1;button.onclick=()=>{const next=index+direction;[route[index],route[next]]=[route[next],route[index]];saveState();renderLayout();renderList()};controls.append(button)});list.append(row)})}
function render(){renderTabs();renderSuggestions();renderList()}

$("addForm").addEventListener("submit",event=>{event.preventDefault();addItem($("itemInput").value,$("quantityInput").value);event.target.reset();$("itemInput").focus()});
$("clearDoneButton").onclick=()=>{state.items=state.items.filter(item=>item.store!==state.store||!item.done);saveState();render()};
$("settingsButton").onclick=()=>{renderLayout();$("layoutDialog").showModal()};
$("printButton").onclick=()=>window.print();
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();deferredInstall=event;$("installButton").hidden=false});
$("installButton").onclick=async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;$("installButton").hidden=true};
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
render();
