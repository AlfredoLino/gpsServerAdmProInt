const modelAlumnos = require('../model/alumno/alumno')

/**
 * @author Alfredo Lino Mendoza
 * @param {Request} req Contiene informacion sobre el request
 * @param {Response} res Contiene los metodos para efectuar una respuesta 
 */
const insertAlumno = async (req, res) => {
  const newAlumno = new modelAlumnos({ ...req.body });
  try {
    const alumno = await newAlumno.save();
    if (alumno) {
      return res.status(201).json({
        message: "Alumno creado",
      });
    } else {
      return res.status(401).json({
        message: "Cuenta no creada, reintente.",
      });
    }
  } catch (error) {
    console.log("error");
    return res.status(401).json({
      message: "Falla del servidor",
      error,
    });
  }
};

module.exports = insertAlumno