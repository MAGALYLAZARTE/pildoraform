import {useForm} from 'react-hook-form'

function App() {
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    
  });

  
  return (
    <form onSubmit={onSubmit}>

      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" {...register("nombre")} />

      <label htmlFor="correo">Correo</label>
      <input type="email" id="correo" {...register("correo")} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register("password")} />

      <label htmlFor="pais">País</label>
      <select id="pais" {...register("pais")}>
        <option value="mx">México</option>
        <option value="pr">Perú</option>
        <option value="ar">Argentina</option>
        <option value="co">Colombia</option>
      </select>

      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" id="terminos" {...register("terminos")} />

      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
