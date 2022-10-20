import Switch from "../components/Switch";

export default function Config() {
  return <div className="text-white tex-xl">
    <Switch label="Hola" onChange={(evt) => {
      console.log(evt.target.value)
    }}></Switch>
  </div>
}
