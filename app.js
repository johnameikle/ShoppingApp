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

const SEED_ITEMS = [
  {id:"photo-m-01",name:"Bananas",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-02",name:"Tomatoes",quantity:2,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-03",name:"Satsumas",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-04",name:"Kiwis",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-05",name:"Avocados",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-06",name:"Onion",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-07",name:"Potatoes",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-08",name:"Beets?",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-09",name:"Kale",quantity:1,store:"morrisons",section:"Fruit & vegetables",done:false},
  {id:"photo-m-10",name:"Rosemary",quantity:1,store:"morrisons",section:"Herbs & chilled snacks",done:false},
  {id:"photo-m-11",name:"Sciattulo ravioli",quantity:1,store:"morrisons",section:"Cupboard ingredients",done:false},
  {id:"photo-m-12",name:"Sourdough",quantity:1,store:"morrisons",section:"Bread & wraps",done:false},
  {id:"photo-m-13",name:"Bread",quantity:1,store:"morrisons",section:"Bread & wraps",done:false},
  {id:"photo-m-14",name:"Garlic bread",quantity:1,store:"morrisons",section:"Bread & wraps",done:false},
  {id:"photo-m-15",name:"Wraps",quantity:1,store:"morrisons",section:"Bread & wraps",done:false},
  {id:"photo-m-16",name:"Sweets / chocolate for Dad",quantity:1,store:"morrisons",section:"Sweets, crisps & cakes",done:false},
  {id:"photo-m-17",name:"Crisps",quantity:1,store:"morrisons",section:"Sweets, crisps & cakes",done:false},
  {id:"photo-m-18",name:"Jaffa cakes",quantity:1,store:"morrisons",section:"Sweets, crisps & cakes",done:false},
  {id:"photo-m-19",name:"Tunnock's",quantity:1,store:"morrisons",section:"Sweets, crisps & cakes",done:false},
  {id:"photo-m-20",name:"Eggs",quantity:1,store:"morrisons",section:"Cupboard ingredients",done:false},
  {id:"photo-m-21",name:"2 × butter beans",quantity:2,store:"morrisons",section:"Tinned food",done:false},
  {id:"photo-m-22",name:"Beans",quantity:1,store:"morrisons",section:"Tinned food",done:false},
  {id:"photo-m-23",name:"Sardines",quantity:1,store:"morrisons",section:"Tinned food",done:false},
  {id:"photo-m-24",name:"Mayo",quantity:1,store:"morrisons",section:"Sauces",done:false},
  {id:"photo-m-25",name:"Tomato puree",quantity:1,store:"morrisons",section:"Sauces",done:false},
  {id:"photo-m-26",name:"Crème fraîche",quantity:1,store:"morrisons",section:"Dairy",done:false},
  {id:"photo-m-27",name:"Milk",quantity:1,store:"morrisons",section:"Dairy",done:false},
  {id:"photo-m-28",name:"Cheese",quantity:1,store:"morrisons",section:"Dairy",done:false},
  {id:"photo-m-29",name:"Butter",quantity:1,store:"morrisons",section:"Dairy",done:false},
  {id:"photo-m-30",name:"Red wine vinegar",quantity:1,store:"morrisons",section:"Vinegar & condiments",done:false},
  {id:"photo-m-31",name:"Ham joint",quantity:1,store:"morrisons",section:"Meat",done:false},
  {id:"photo-m-32",name:"Magnums",quantity:1,store:"morrisons",section:"Frozen",done:false},
  {id:"photo-m-33",name:"Pot waffles",quantity:1,store:"morrisons",section:"Frozen",done:false},
  {id:"photo-m-34",name:"Wedges",quantity:1,store:"morrisons",section:"Frozen",done:false},
  {id:"photo-m-35",name:"Ketchup",quantity:1,store:"morrisons",section:"Sauces",done:false},
  {id:"photo-m-36",name:"Fairy softener",quantity:1,store:"morrisons",section:"Laundry & cleaning",done:false},
  {id:"photo-m-37",name:"Sponges",quantity:1,store:"morrisons",section:"Laundry & cleaning",done:false},
  {id:"photo-m-38",name:"Flash spray",quantity:1,store:"morrisons",section:"Laundry & cleaning",done:false},
  {id:"photo-m-39",name:"Loo roll",quantity:1,store:"morrisons",section:"Other",done:false},
  {id:"photo-m-40",name:"Cards (Bab? + Sheila)",quantity:1,store:"morrisons",section:"Other",done:false},
  {id:"photo-m-41",name:"Body moisturiser",quantity:1,store:"morrisons",section:"Other",done:false},
  {id:"photo-a-01",name:"Sun-dried tomatoes",quantity:1,store:"aldi",section:"Fruit & vegetables",done:false},
  {id:"photo-a-02",name:"Dark chocolate",quantity:1,store:"aldi",section:"Cupboard ingredients",done:false},
  {id:"photo-a-03",name:"Rice",quantity:1,store:"aldi",section:"Cupboard ingredients",done:false},
  {id:"photo-a-04",name:"Sourdough baguette",quantity:1,store:"aldi",section:"Bakery",done:false},
  {id:"photo-ms-01",name:"Soup",quantity:1,store:"marks",section:"Tinned food",done:false},
  {id:"photo-ms-02",name:"Yoghurts",quantity:1,store:"marks",section:"Dairy",done:false},
  {id:"photo-ms-03",name:"Cream",quantity:1,store:"marks",section:"Dairy",done:false},
  {id:"photo-ms-04",name:"Sausages",quantity:1,store:"marks",section:"Meat",done:false},
  {id:"photo-ms-05",name:"Fruit",quantity:1,store:"marks",section:"Fruit & vegetables",done:false},
  {id:"photo-ms-06",name:"Fruit cake",quantity:1,store:"marks",section:"Treats",done:false}
];
const initialState = {store:"morrisons",items:SEED_ITEMS.map(item=>({...item})),routes:structuredClone(DEFAULT_ROUTES),photoListImported:true};
const $ = id => document.getElementById(id);
const microsoftConfig=window.shoppingAppMicrosoftConfig||{clientId:"",authority:"https://login.microsoftonline.com/consumers",redirectUri:window.location.origin};
const SCOPES=["Files.ReadWrite"];
const msalReady=Boolean(microsoftConfig.clientId&&window.msal?.PublicClientApplication);
const msalApp=msalReady?new window.msal.PublicClientApplication({auth:{clientId:microsoftConfig.clientId,authority:microsoftConfig.authority,redirectUri:microsoftConfig.redirectUri},cache:{cacheLocation:"localStorage"}}):null;
let state=loadState(),deferredInstall,account,driveFile,remoteETag,remoteTimer,writeTimer,remoteReady=false;

function loadLocator(){const url=new URL(location.href);const driveId=url.searchParams.get("driveId"),itemId=url.searchParams.get("itemId");if(driveId&&itemId){const locator={driveId,itemId};localStorage.setItem("shopping-drive-file",JSON.stringify(locator));return locator}try{return JSON.parse(localStorage.getItem("shopping-drive-file"))}catch{return null}}
async function graph(path,options={}){const token=await msalApp.acquireTokenSilent({scopes:SCOPES,account});const response=await fetch(`https://graph.microsoft.com/v1.0${path}`,{...options,headers:{Authorization:`Bearer ${token.accessToken}`,...options.headers}});if(!response.ok){let detail="";try{detail=(await response.json()).error?.message||""}catch{}throw new Error(`${response.status}${detail?`: ${detail}`:""}`)}if(response.status===204)return null;const type=response.headers.get("content-type")||"";return type.includes("json")?response.json():response}
function normalizeState(value){if(!value||!Array.isArray(value.items))return structuredClone(initialState);return {...initialState,...value,items:value.items,routes:{...structuredClone(DEFAULT_ROUTES),...(value.routes||{})}}}
async function readFile(){const path=`/drives/${encodeURIComponent(driveFile.driveId)}/items/${encodeURIComponent(driveFile.itemId)}`;let metadata;try{metadata=await graph(`${path}?%24select=id%2C%40microsoft.graph.downloadUrl`)}catch{metadata=await graph(path)}let downloadUrl=metadata["@microsoft.graph.downloadUrl"];if(!downloadUrl){metadata=await graph(path);downloadUrl=metadata["@microsoft.graph.downloadUrl"]}if(!downloadUrl)throw new Error("OneDrive didn’t return a content download URL. Try signing out and back in.");const response=await fetch(downloadUrl);if(!response.ok)throw new Error(`Could not download shared list (${response.status})`);return response.json()}
async function uploadState(){if(!driveFile)return;const result=await graph(`/drives/${encodeURIComponent(driveFile.driveId)}/items/${encodeURIComponent(driveFile.itemId)}/content`,{method:"PUT",headers:{"Content-Type":"text/plain"},body:JSON.stringify(state)});remoteETag=result.eTag||remoteETag;$('saveStatus').textContent="Synced with OneDrive"}

function loadState(){try{const saved=JSON.parse(localStorage.getItem("shopping-state-v1"));if(!saved)return structuredClone(initialState);const loaded={...initialState,...saved,routes:{...structuredClone(DEFAULT_ROUTES),...(saved?.routes||{})}};if(!saved.photoListImported){const existing=new Set(loaded.items.map(item=>`${item.store}:${item.name.toLowerCase()}`));for(const item of SEED_ITEMS){const key=`${item.store}:${item.name.toLowerCase()}`;if(!loaded.items.some(existingItem=>existingItem.id===item.id)&&!existing.has(key)){loaded.items.push({...item});existing.add(key)}}loaded.photoListImported=true;localStorage.setItem("shopping-state-v1",JSON.stringify(loaded))}return loaded}catch{return structuredClone(initialState)}}
function saveState(){localStorage.setItem("shopping-state-v1",JSON.stringify(state));$("saveStatus").textContent=remoteReady?"Syncing…":"Saved on this device";if(remoteReady){clearTimeout(writeTimer);writeTimer=setTimeout(()=>{writeTimer=null;uploadState().catch(error=>{$("saveStatus").textContent="Sync paused";$("syncStatus").textContent=`Could not sync: ${error.message}`})},400)}}
async function resolveFile(){driveFile=loadLocator();if(driveFile)return true;const path="/me/drive/root:/John-Shelleys-Shared-Shopping-List.json";let created=false;try{driveFile=await graph(path+"?$select=id,eTag,parentReference")}catch(error){if(!String(error.message).startsWith("404"))throw error;driveFile=await graph(path+":/content",{method:"PUT",headers:{"Content-Type":"text/plain"},body:JSON.stringify(state)});created=true}driveFile={driveId:driveFile.parentReference?.driveId||driveFile.driveId,itemId:driveFile.id};localStorage.setItem("shopping-drive-file",JSON.stringify(driveFile));remoteETag=driveFile.eTag;return !created}
async function refreshRemote(){const item=await graph(`/drives/${encodeURIComponent(driveFile.driveId)}/items/${encodeURIComponent(driveFile.itemId)}?$select=id,eTag`);if(item.eTag&&item.eTag!==remoteETag&&!writeTimer){remoteETag=item.eTag;state=normalizeState(await readFile());localStorage.setItem("shopping-state-v1",JSON.stringify(state));render();$("saveStatus").textContent="Updated from OneDrive"}}
async function startSync(){try{$("syncStatus").textContent=`Connecting OneDrive as ${account.username}…`;const exists=await resolveFile();if(exists){const item=await graph(`/drives/${encodeURIComponent(driveFile.driveId)}/items/${encodeURIComponent(driveFile.itemId)}?$select=id,eTag`);remoteETag=item.eTag;state=normalizeState(await readFile());localStorage.setItem("shopping-state-v1",JSON.stringify(state));render()}else if(!remoteETag)remoteETag=(await graph(`/drives/${encodeURIComponent(driveFile.driveId)}/items/${encodeURIComponent(driveFile.itemId)}?$select=eTag`)).eTag;remoteReady=true;$("sharedApp").hidden=false;$("shareForm").hidden=false;$("signOutButton").hidden=false;$("signInButton").hidden=true;$("accessHeading").textContent="Your shared list is connected";$("accessMessage").textContent=`Signed in as ${account.username}. Enter Shelley’s Microsoft email below to invite her.`;$("syncStatus").textContent=`Connected to OneDrive · ${account.username}`;$("listSummary").textContent="John & Shelley · shared list";$("saveStatus").textContent="Synced with OneDrive";clearInterval(remoteTimer);remoteTimer=setInterval(()=>refreshRemote().catch(error=>{$("syncStatus").textContent=`OneDrive sync paused: ${error.message}`}),4000)}catch(error){$("syncStatus").textContent=`Could not open the shared file: ${error.message}. Sign in with an account that has edit access, or ask John to share the OneDrive file.`}}
if(msalReady){$("sharedAccess").hidden=false;$("sharedApp").hidden=true;msalApp.initialize().then(()=>msalApp.handleRedirectPromise()).then(result=>{account=result?.account||msalApp.getAllAccounts()[0];if(account){msalApp.setActiveAccount(account);startSync()}}).catch(error=>$("syncStatus").textContent=`Microsoft sign-in error: ${error.message}`);$("signInButton").onclick=()=>msalApp.loginRedirect({scopes:SCOPES}).catch(error=>$("syncStatus").textContent=`Could not sign in: ${error.message}`);$("signOutButton").onclick=()=>msalApp.logoutRedirect({account});$("shareForm").addEventListener("submit",async event=>{event.preventDefault();$("syncStatus").textContent="Sharing the list…";try{await graph(`/drives/${encodeURIComponent(driveFile.driveId)}/items/${encodeURIComponent(driveFile.itemId)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({recipients:[{email:$("shareEmail").value.trim()}],roles:["write"],requireSignIn:true,sendInvitation:true,message:"John and Shelleys shared shopping list"})});const url=new URL(location.href);url.searchParams.set("driveId",driveFile.driveId);url.searchParams.set("itemId",driveFile.itemId);$("shareLink").hidden=false;$("shareLink").value=url.toString();try{await navigator.clipboard.writeText(url.toString())}catch{}$("syncStatus").textContent="Shared with Shelley. Send her the app link shown below; she will sign in with her own Microsoft account."}catch(error){$("syncStatus").textContent=`Could not share the list: ${error.message}`}})}else{$("accessHeading").textContent="OneDrive sync needs setup";$("accessMessage").textContent="The Microsoft app connection is not configured yet. This device will keep using its saved copy until setup is complete.";$("signInButton").hidden=true;$("sharedApp").hidden=false;$("syncStatus").textContent="Saved on this device for now."}
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
