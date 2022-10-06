import { Controller, useForm } from "react-hook-form";
import MaskedInput from "./MaskedInput";

function App() {
  const DEFAULT = 70;
  const { control, watch } = useForm({
    defaultValues: {
      maskedInput: DEFAULT,
    },
  });

  return (
    <>
      <Controller
        name="maskedInput"
        render={(props) => <MaskedInput defaultValue={DEFAULT} {...props} />}
        control={control}
      />
      <div style={{ color: "white" }}>
        <b>Watch : </b>
        {watch("maskedInput")}
      </div>
    </>
  );
}

export default App;
