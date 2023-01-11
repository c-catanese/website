import { createEffect, createSignal, getOwner } from "solid-js";
import { nanoid } from "nanoid";
import "./style/todo-style.css"
import Rewind from "./Rewind-embed/Rewind"
import { max } from "d3";
import Nav from "./components/Nav";
// import Tree from './src/Tree';
// import DragBar from './src/DragBar';

const Todo = (props) => {
  const [id, setId] = createSignal("");
  const [data1, setData1] = createSignal("");
  const [data2, setData2] = createSignal("");
  const [data3, setData3] = createSignal("");
  const [data4, setData4] = createSignal("");
  const [data5, setData5] = createSignal("");
  const [users, setUsers] = createSignal([{ id: nanoid(8), data1: "48fa37f", data2: "data2", data3: "data3", data4: "data4", data5: "data5" }, { id: nanoid(8), data1: "5590a7", data2: "data2", data3: "data3", data4: "data4", data5: "data5" }, { id: nanoid(8), data1: "3cbbf7", data2: "data2", data3: "data3", data4: "data4", data5: "data5" }]);
  const [buttonName, setButtonName] = createSignal()

  setButtonName("Add Data");

  const submitUser = (id) => {
    if (id) {
      setUsers(users().filter((user) => user.id !== id()))
      setUsers([...users(), { id: id(), data1: data1(), data2: data2(), data3: data3(), data4: data4(), data5: data5() }]);
      setData1("");
      setData2("");
      setData3("");
      setData4("");
      setData5("");
    } else {
      setUsers([...users(), { id: nanoid(8), data1: data1(), data2: data2(), data3: data3(), data4: data4(), data5: data5() }]);
    }
    setData1("");
    setData2("");
    setData3("");
    setData4("");
    setData5("");
    setButtonName("Add Data");
  } 

  const deleteUser = (id) => {
    const newUsers = users().filter((user) => user.id !== id)
    setUsers(newUsers);
  }

  const editUser = (id) => {
    const user = users().find((user) => user.id === id);
    setData1(user.data1);
    setData2(user.data2);
    setData3(user.data3);
    setData4(user.data4);
    setData5(user.data5);
    setButtonName("Update")
    const newUsers = users().filter((user) => user.id !== id)
    setUsers(newUsers);
  }

  window.addEventListener("message", function(event) {
    // We only accept messages from the window. change this to a specific div
    if (event.source !== window) return;
    console.log(event.data)
    // send from page to devtoool
    if (event.data.from && event.data.from === "FROM_PAGE") {
      document.getElementById('Iframe').contentWindow.postMessage(event.data);

    }
    else if (event.data.from && event.data.from === "FROM_DEVTOOL") {
      console.log(event.data)
      document.getElementById('wrapper').contentWindow.postMessage(event.data);
    }
    console.log(event.data, "text")
  });

  window.document.addEventListener('myEvent', handleEvent, false)
  function handleEvent(e){
    console.log(e.detail)
  }

  

  // window.addEventListener("message", (event) => {
  //   // extract the data from the message event
  //   const { data } = event;

  //   // display it in our textarea as formatted JSON
  //   output.value = JSON.stringify(data, null, 2);
  // });


  return (
    <>
    <Nav/>
    <div  id = 'wrapper' class = "flex flex-row">
      <Rewind>
        <div class="dark:bg-slate-700 ">
          <div class="flex justify-center mt-18 pt-20">
            <form class="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-6">
                <label class="block text-white-700 text-sm font-bold mb-2" for="username">
                  Data1
                </label>
                <input value={data1()} onInput={(e) => setData1(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="data" type="text" placeholder="Data1"/>
              </div>
              <div class="mb-6">
                <label class="block text-white-700 text-sm font-bold mb-2" for="password">
                  Data2
                </label>
                <input value={data2()} onInput={(e) => setData2(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="data" type="text" placeholder="Data2"/>
              </div>
              <div class="mb-6">
                <label class="block text-white-700 text-sm font-bold mb-2" for="password">
                  Data3
                </label>
                <input value={data3()} onInput={(e) => setData3(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="data" type="text" placeholder="Data3"/>
              </div>
              <div class="mb-6">
                <label class="block text-grawhitey-700 text-sm font-bold mb-2" for="password">
                  Data4
                </label>
                <input value={data4()} onInput={(e) => setData4(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="data" type="text" placeholder="Data4"/>
              </div>
              <div class="mb-6">
                <label class="block text-white-700 text-sm font-bold mb-2" for="password">
                  Data5
                </label>
                <input value={data5()} onInput={(e) => setData5(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="data" type="text" placeholder="Data5"/>
              </div>
              <div class="flex items-center justify-between">
                <button onClick={() => buttonName() === "Add Data" ? submitUser() : submitUser(id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  {buttonName()}
                </button>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
            </p>
          </div>
          <div class="relative rounded-xl overflow-auto">
            <div class="shadow-sm overflow-hidden my-8">
            <table class="border-collapse table-fixed w-full text-sm">
              <thead>
                <tr>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-12 pt-0 pb-3 text-slate-400 dark:text-slate-200">Data1</th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-12 pt-0 pb-3 text-slate-400 dark:text-slate-200 ">Data2</th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-12 pt-0 pb-3 text-slate-400 dark:text-slate-200 ">Data3</th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-12 pt-0 pb-3 text-slate-400 dark:text-slate-200 ">Data4</th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-12 pt-0 pb-3 text-slate-400 dark:text-slate-200 ">Data5</th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-12 pt-0 pb-3 text-slate-400 dark:text-slate-200 ">Edit</th>
                  <th class="border-b dark:border-slate-600 font-medium p-4 pl-12 pt-0 pb-3 text-slate-400 dark:text-slate-200 ">Delete</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-slate-900">
                {
                users().map((user) => (
                  <tr>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">{user.data1}</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">{user.data2}</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">{user.data3}</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">{user.data4}</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">{user.data5}</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => editUser(user.id)}>Edit</button>
                  </td>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </Rewind>
      <iframe src = "./Iframe" id='Iframe' class='timelineContainer'></iframe>
    </div>
    </>
  );
};
export default Todo;