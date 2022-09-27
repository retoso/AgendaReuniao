const firebaseConfig = {
    apiKey: "AIzaSyBA5Ags5_bGq94FdaLYfHU2RlhRaX_QrjE",
    authDomain: "agendatest-32fc0.firebaseapp.com",
    projectId: "agendatest-32fc0",
    storageBucket: "agendatest-32fc0.appspot.com",
    messagingSenderId: "847568347797",
    appId: "1:847568347797:web:948f15d174d9cf3b85b19c"
};


// inicializando firebase
firebase.initializeApp(firebaseConfig);

// database
var agendaTestDB = firebase.database().ref("agendaTest");

document.getElementById('agendaTest').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var nome = getElementVal('nome');
    var email = getElementVal('email');
    var telefone = getElementVal('telefone');
    
    salvarNoBD(nome, email, telefone);
}

const salvarNoBD = (nome, email, telefone) => {
    var novoContato = agendaTestDB.push();

    novoContato.set({
        nome: nome,
        email: email,
        telefone: telefone,
    });
};


const getElementVal = (id) => {
    return document.getElementById(id).value
};



