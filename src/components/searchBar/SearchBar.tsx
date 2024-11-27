import { useFormik } from "formik";

export default function SearchBar() {
  const formik = useFormik({
    initialValues: {
      cityName: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          type="text"
          name="cityName"
          value={formik.values.cityName}
        />
        <button type="submit">Get</button>
      </form>
    </div>
  );
}
