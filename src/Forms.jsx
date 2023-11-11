function Input({ text,className="m-4 p-2 rounded",placeholder }) {
  return (
  <>
  <input placeholder={placeholder} className={className} value={text} />
  </>);
}

function Forms() {
  return (
    <>
      <div className="flex flex-col forms-container bg-slate-400 w-6/12 rounded m-4">
        <div className="flex basic-form flex-col">
          <Input placeholder="Jonna"/>
          <Input placeholder="Jinton"/>
          <Input/>
          <Input/>

        </div>
        <div className="school-form"></div>
        <div className="work-form"></div>
      </div>
    </>
  );
}

export default Forms;
