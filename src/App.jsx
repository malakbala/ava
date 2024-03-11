import {Message} from "primereact/message"
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"

const d=[{
  name:"rae lil black"
},{
  name:"rae lil black"
},{
  name:"rae lil black"
},{
  name:"rae lil black"
},{
  name:"rae lil black"
},{
  name:"rae lil black"
}]


function App() {
  return (
    <>
      <Message text="امروز تایمتون خالیه"/>
<DataTable value={d}>
  <Column field="name"/>
</DataTable>
    </>
  );
}

export default App;
