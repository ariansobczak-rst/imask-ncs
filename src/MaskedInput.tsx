import { useState } from "react";
import { IMask, IMaskMixin } from "react-imask";
import { IMaskInputProps } from "react-imask/dist/mixin";

const PLACEHOLDER = "0 %";
const NCS_REGEX =
  /^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|R|B|Y|G|((R\d{2}B)|(B\d{2}G)|(G\d{2}Y)|(Y\d{2}R)))$/;
const NcsMask = new IMask.MaskedRegExp({ mask: NCS_REGEX });

const MASK: IMaskInputProps["mask"] = [
  {
    mask: NcsMask,
    lazy: false,
  },
];

const IMaskInput = IMaskMixin(({ inputRef, ...props }) => (
  <input ref={inputRef as any} {...props} />
));

const MaskedInput = ({ defaultValue, onChange, ...props }: any) => {
  const [value, setValue] = useState(defaultValue?.toString() || "");
  const handleAccept = (v: any) => {
    setValue(v);
    onChange(v);
  };

  return (
    <IMaskInput
      {...props}
      mask={MASK}
      onAccept={handleAccept}
      placeholder={PLACEHOLDER}
      value={value}
    />
  );
};

export default MaskedInput;
