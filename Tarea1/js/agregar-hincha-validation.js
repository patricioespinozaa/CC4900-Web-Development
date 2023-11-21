// Region y Comunas
var comunasByregion = {
  arica: ["Seleccione", "Arica", "Camarones", "Putre", "General Lagos"],
  tarapaca: ["Seleccione", "Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  antofagasta: ["Seleccione", "Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  atacama: ["Seleccione", "Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  coquimbo: ["Seleccione", "La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  valparaiso: ["Seleccione", "Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
  metropolitana: ["Seleccione", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
  higgins: ["Seleccione", "Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  maule: ["Seleccione", "Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  nuble: ["Seleccione", "Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
  biobio: ["Seleccione", "Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
  araucania: ["Seleccione", "Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
  rios: ["Seleccione", "Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  lagos: ["Seleccione", "Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
  aysen: ["Seleccione", "Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
  magallenes: ["Seleccione", "Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
}
function makeSubmenu(value) {
  if(value.length==0) document.getElementById("comuna").innerHTML = "<option></option>";
  else{
    var comunasOptions= "";
    for (comunaId in comunasByregion[value]) {
      comunasOptions += "<option>"+comunasByregion[value][comunaId]+"</option>";
    }
    document.getElementById("comuna").innerHTML = comunasOptions;
  }
}
function resetSelection() {
  document.getElementById("region").selectedIndex=0;
  document.getElementById("comuna").selectedIndex=0;
}

// Deportes code
// Lista de deportes
var deportes = ["Clavados","Natación","Natación artística","Polo acuático","Natación en Aguas abiertas","Maratón","Marcha","Atletismo","Bádminton","Balonmano","Básquetbol","Básquetbol 3x3","Béisbol","Boxeo","Bowling","Breaking","Canotaje Slalom","Canotaje de velocidad","BMX Freestyle","BMX Racing","Mountain Bike","Ciclismo pista","Ciclismo ruta","Adiestramiento ecuestre","Evento completo ecuestre","Salto ecuestre","Escalada deportiva","Esgrima","Esquí acuático y Wakeboard","Fútbol","Gimnasia artística Masculina","Gimnasia artística Femenina","Gimnasia rítmica","Gimnasia trampolín","Golf","Hockey césped","Judo","Karate","Levantamiento de pesas","Lucha","Patinaje artístico","Skateboarding","Patinaje velocidad","Pelota vasca","Pentatlón moderno","Racquetball","Remo","Rugby 7","Sóftbol","Squash","Surf","Taekwondo","Tenis","Tenis de mesa","Tiro","Tiro con arco","Triatlón","Vela","Vóleibol","Vóleibol playa"];

var select = document.getElementById("deportes");
for(index in deportes) {
    select.options[select.options.length] = new Option(deportes[index], index);
}
// Multi opciones
new MultiSelectTag('deportes', {
  rounded: true,    // default true
  shadow: true,      // default false
  placeholder: 'Search',  // default Search...
  onChange: function(values) {
      console.log(values)
  }
})
// Validacion
const validateDeportes = (deportes) =>{
  var minOptions = 1;
  var maxOptions = 3;
  var optionCount = 0;
  for (var i = 0; i < deportes.length; i++) {
    if (deportes[i].selected) {
      optionCount++;
      if (optionCount > maxOptions) {
          return false;
      }
    }
  }
  if (optionCount < minOptions) {
    return false;
  }
  return true;
};

// Region code
const validateRegion = (region) => {
  if (!region) return false;
  if (region == "") return false;
  return true;
};
// Comuna code
const validateComuna = (comuna) => {
  if (!comuna) return false;
  if (comuna == "") return false;
  if (comuna == "Seleccione") return false;
  return true;
};

// Modo de transporte code
const validateTransporte = (transporte) => {
  if (!transporte) return false;
  if (transporte == "") return false;
  return true;
};

// Nombre code
const validateNombre = (nombre) => {
  if (!nombre) return false;
  // length validation
  let lengthminValid = nombre.length >= 3;
  let lengthmaxValid = nombre.length <= 80;  // revisar
  return lengthminValid && lengthmaxValid;
};

const validateEmail = (email) => {
  if (!email) return false;
  // length validation
  let lengthValid = email.length <= 30;

  // format validation
  let re=/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  let formatValid = re.test(email);

  // return logic AND of validations.
  return lengthValid && formatValid;
};

const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return true;   // Opcional => return True
  // length validation
  let lengthValid = phoneNumber.length <= 15;

  // format validation
  //let re = /^[0-9]+$/;
  let re =/^\+[1-9]{1}[0-9]{3,14}$/;
  let formatValid = re.test(phoneNumber);

  // return logic AND of validations.
  return lengthValid && formatValid;
};

const validateComentarios = (comments) => {
  if (!comments) return true;  // Opcional => return True
  // length validation
  let lengthmaxValid = comments.length <= 80;  // revisar
  return lengthmaxValid;
};

// popUp
let popup = false;
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function pvalidate() {
  if (popup==true){
    myFunction()
  }
}

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function pvalidate2() {
  if (popup==true){
    myFunction2()
  }
}

const validateForm = () => {
  // get elements from DOM by using form's name.
  let myForm = document.forms["myForm"];
  var deportes = document.getElementById("deportes");
  let region = myForm["region"].value;
  let comuna = myForm["comuna"].value;
  let transporte = myForm["transporte"].value;
  let nombre = myForm["nombre"].value;
  let email = myForm["email"].value;
  let phoneNumber = myForm["phone"].value;
  let comments = myForm["comments"].value;


  // validation auxiliary variables and function.
  let invalidInputs = [];
  let isValid = true;
  const setInvalidInput = (inputName) => {
    invalidInputs.push(inputName);
    isValid &&= false;
  };

  // validation logic
  if (!validateDeportes(deportes)) {
    setInvalidInput("Deportes: Debe seleccionar entre 1 y 3 deportes.");
  }
  if (!validateRegion(region)) {
    setInvalidInput("Región: Debe seleccionar una región.");
  }
  if (!validateComuna(comuna)) {
    setInvalidInput("Comuna: Debe seleccionar una comuna.");
  }
  if (!validateTransporte(transporte)) {
    setInvalidInput("Trasnporte: No ha seleccionado una opción.");
  } 
  if (!validateNombre(nombre)) {
    setInvalidInput("Nombre: Debe tener minimo 3 caracteres y máximo 80.");
  }
  if (!validateEmail(email)) {
    setInvalidInput("Email: No se ha ingresado o no cumple el formato de correo.");
  }
  if (!validatePhoneNumber(phoneNumber)) {
    setInvalidInput("Numero de celular: Su número no cumple el formato. Debe empezar con +");
  }
  if (!validateComentarios(comments)) {
    setInvalidInput("Comentarios invalidos.");
  }
 
  // finally display validation
  let validationBox = document.getElementById("val-box");
  let validationMessageElem = document.getElementById("val-msg");
  let validationListElem = document.getElementById("val-list");

  if (!isValid) {
    popup = false;
    validationListElem.textContent = "";
    // add invalid elements to val-list element.
    for (input of invalidInputs) {
      let listElement = document.createElement("li");
      listElement.innerText = input;
      validationListElem.append(listElement);
    }
    // set val-msg
    validationMessageElem.innerText = "Los siguiente campos son invalidos:";

    // make validation prompt visible
    validationBox.hidden = false;
  } else {  // isValid

    // Opcion rapida para eliminar mensaje de campos invalidos
    invalidInputs = [];
    validationListElem.textContent = "";
    // set val-msg
    validationMessageElem.innerText = "";
    // popup indica si se validaron los campos o no, y asi ejecutar funciones PopUp
    popup =true;
    // Sacar(?)
    //myForm.submit();
  }
};

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateForm);
