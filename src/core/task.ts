export default interface Task {
  id: number,
  name: string,
  completed: boolean
}

// export sirve para exportar una interfaz.

// Cuando usas export default, estás especificando que ese símbolo es el export por defecto del módulo. Un módulo puede tener, como máximo, un export default. La ventaja de export default es que al importar, no necesitas usar llaves {} y puedes nombrar el símbolo como desees en el archivo que importa sin tener que coincidir con el nombre original.

/*ejemplo: 

      import { Task } from './core/task' (sin default)
      import MyTask from './core/task' (con default)
*/
