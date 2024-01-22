import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      breakfastPrice,
      maxBookingLength,
      maxGeustsPerBooking,
      minBookingLength,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e, fieldName) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [fieldName]: value });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maxGeustsPerBooking}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleUpdate(e, "maxGeustsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
