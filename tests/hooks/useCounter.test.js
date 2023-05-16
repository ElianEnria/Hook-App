import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Prueba useCounter", () => {
  test("should retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, subtract, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(subtract).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("should incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;
    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(11);
  });

  test("should resetear el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, reset } = result.current;
    act(() => {
        increment();
        reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
