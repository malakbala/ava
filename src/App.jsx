import { Message } from "primereact/message";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Menubar } from "primereact/menubar";

const items = [
  {
    label: "Update",
  },
  {
    label: "Delete",
  },
];
const d = [
  {
    name: "rae lil black",
  },
  {
    name: "rae lil black",
  },
  {
    name: "rae lil black",
  },
  {
    name: "rae lil black",
  },
  {
    name: "rae lil black",
  },
  {
    name: "rae lil black",
  },
];

function App() {
  return (
    <>
      <Menubar model={items} />
      <Message text="امروز تایمتون خالیه" />
      <DataTable value={d}>
        <Column field="name" />
      </DataTable>
    </>
  );
}

export default App;
