import "./App.css";
import { useState } from "react";
import { Input, Button } from "./Components";
import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),
  rating: Yup.number()
    .min(1)
    .max(10, "rate under 10")
    .required("rating is required"),
  imageUrl: Yup.string().required("paste url"),
  description: Yup.string().required("describe something"),
});

function App() {
  const initialValues = {
    rating: "",
    imageUrl: "",
    title: "",
    description: "",
  };
  const [movies, setMovies] = useState([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setfieldValue({ ...initialValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (values: any) => {
    // setMovies();
    console.log(values);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <h1>Movie Card</h1>
            <Input
              name="title"
              type="text"
              label="Enter Movie Name : "
              placeholder="movie title"
              onChange={handleChange}
            />
            <ErrorMessage name="title" />
            <Input
              name="rating"
              type="text"
              label="Give your Rating : "
              placeholder="rate the movie"
              onChange={handleChange}
            />
            <ErrorMessage name="rating" />

            <Input
              name="image"
              type="link"
              label="Enter the Movie image : "
              placeholder="paste image url"
              onChange={handleChange}
            />
            <ErrorMessage name="image" />

            <Input
              name="description"
              type="text"
              label="Enter the description : "
              placeholder="about movie"
              onChange={handleChange}
            />
            <ErrorMessage name="description" />

            <Button type="submit" name="Submit" />
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
