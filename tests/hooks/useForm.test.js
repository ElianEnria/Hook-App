import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Prueba useForm", () => {
  const initialForm = {
    name: "Elian",
    email: "elian@gmail.com",
  };

  test("should regresar la informacion por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result.current)
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("should cambiar el nombre del formulario", () => {
    const newValue = "Elian";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("should hacer reset del formulario", () => {
    const newValue = "Elian";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
        onInputChange({ target: { name: "name", value: newValue } });
        onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
