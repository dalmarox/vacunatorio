export const productos = [
	{
		id: "1",
		nombre: "ADACEL",
		laboratorio: "Sanofi-Pasteur",
		imagen: "./imagenes/ADACEL (2).jpg",
		cantidad:"10",
		descripcion: "Vacuna de toxoides tetánico y diftérico",
		
	},
	{
		id: "2",
		nombre: "MENACTRA",
		laboratorio:"Sanofi-Pasteur",
		imagen: "./imagenes/MENACTRA.jpg",
        cantidad:"8",	
		descripcion: "Vacuna Antimeningocóccica contra subgrupos A,C y W-135",

	},
	{
		id: "3",
		nombre: "VACUNAS ANTIGRIPALES TETRAVALENTES",
		laboratorio: "Cepas 2023 autorizadas por ANMAT",
		imagen: "./imagenes/ANTIGRIPALES TETRAVALENTES.png",
		cantidad:"25",
	    descripcion: "Vacunas antigripales",
	
	},
	{
		id: "4",
		nombre: "BUSTRIX ACELULAR",
		laboratorio: "GSK",
		imagen: "./imagenes/BUSTRIX ACELULAR.jpg",
		cantidad:"3",
		descripcion: "Vacuna contra Difteria, Tétanos DPT y Pertusis acelular",
		
	},
	{
		id: "5",
		nombre: "GAMMATET-T 250",
		laboratorio: "Gador",
		imagen: "./imagenes/Gammaglobulina-Antitetánica 250.webp",
		cantidad:"18",
		descripcion: "Gammaglobulina antitetánica 250",
		
	},
	{
		id: "6",
		nombre: "GARDASIL 9",
		laboratorio: "MSD",
		imagen: "./imagenes/Gardasil.jpg",
		cantidad:"6",
		descripcion: "Vacuna nonavalente frente al virus del papiloma humano",
	
	},
	{
		id: "7",
		nombre: "HEXAXIM",
		laboratorio: "Sanofi-Pasteur",
		imagen: "./imagenes/Hexaxim-vacuna.jpg",
		cantidad:"0",
		descripcion: "Vacuna DPT (acelular), Hepatitis B, Haemofilus influenza y Poliomielitis",
	},
	{
		id: "8",
		nombre: "INFLUVAC",
		laboratorio: "Abbott",
		imagen: "./imagenes/vacuna-antigripal TRIVALENTE.jpg",
		cantidad:"1",
		descripcion: "Vacuna Antigripal trivalente",
	},
];

JSON.parse(localStorage.getItem("productos"))|| localStorage.setItem("productos", JSON.stringify(productos));

