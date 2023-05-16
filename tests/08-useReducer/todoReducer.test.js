import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialSatate = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("should regresar el estado inicial", () => {
    const newState = todoReducer(initialSatate, {});
    expect(newState).toBe(initialSatate);
  });
  
  test("should agregar un todo", () => {
    const action = {
      type: "[Todo] Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };
    const newState = todoReducer(initialSatate, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });


  test('should eliminar un TODO', () => { 
    const action = {
        type: "[TODO] Remove Todo",
        payload: 1
      };
      const newState = todoReducer(initialSatate, action);
      expect(newState.length).toBe(0);
   })
   
   test('should realizar toggle del todo', () => { 
    const action = {
        type: "[TODO] Toggle Todo",
        payload: 1
      };
      const newState = todoReducer(initialSatate, action);
      expect(newState[0].done).toBe(true);
   })


});
