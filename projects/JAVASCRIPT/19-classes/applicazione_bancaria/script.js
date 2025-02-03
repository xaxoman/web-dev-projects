// ARRAY CHE FUNFONO DA ASSI PER IL GRAFICO
let X_CATEGORIE = ["Alimentari", "Bollette", "Abbigliamento", "Casa", "Auto", "Altro"];
let Y_VAL_SPESE = new Array(X_CATEGORIE.length).fill(0); 
let barColors = []; 

for (let i = 0; i < X_CATEGORIE.length; i++) { 
  const colore_rand = rand_rgb();
  barColors.push(colore_rand);
}

function rand_rgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
}

function AggiungiSpesa() {
  let nome_spesa = document.getElementById("nome_spesa").value;
  let info_spesa = document.getElementById("info_spesa").value;
  let valore_spesa = document.getElementById("valore_spesa").value;
  let data_spesa = document.getElementById("data_spesa").value;
  let categoria_spesa = document.getElementById("categoria_spesa").value;

  // Check if "Altro" is selected and get custom category if exists
  if (categoria_spesa === "Altro") {
    const customCategoryInput = document.getElementById("custom_category");
    if (customCategoryInput && customCategoryInput.value.trim() !== '') {
      categoria_spesa = customCategoryInput.value.trim();
      
      // Add new category to arrays if it doesn't exist
      if (!X_CATEGORIE.includes(categoria_spesa)) {
        X_CATEGORIE.push(categoria_spesa);
        Y_VAL_SPESE.push(0);
        barColors.push(rand_rgb());
        
        // Update chart labels
        grafico_spese.data.labels = X_CATEGORIE;
        grafico_spese.data.datasets[0].backgroundColor = barColors;
      }
    }
  }

  // Check if required fields are filled
  if ((nome_spesa !== '') && (valore_spesa !== '') && 
      (categoria_spesa !== 'Seleziona Categoria') && 
      (categoria_spesa !== 'Altro' || 
       (document.getElementById("custom_category") && 
        document.getElementById("custom_category").value.trim() !== ''))) {

    const tabella_spese = document.getElementById("tabella_spese");

    const cella_nome_spesa = document.createElement("td");
    cella_nome_spesa.innerHTML = nome_spesa;

    const cella_info_spesa = document.createElement("td");
    cella_info_spesa.innerHTML = info_spesa;

    const cella_valore_spesa = document.createElement("td");
    cella_valore_spesa.innerHTML = valore_spesa + " €";
    (valore_spesa < 0) ? cella_valore_spesa.style.color = "red" : cella_valore_spesa.style.color = "green";  

    const cella_data_spesa = document.createElement("td");
    cella_data_spesa.innerHTML = data_spesa;

    const cella_categoria_spesa = document.createElement("td");
    cella_categoria_spesa.innerHTML = categoria_spesa;

    // Add to chart
    Spesa_PerCategoria(valore_spesa, categoria_spesa);

    const riga_spesa = document.createElement("tr");
    riga_spesa.appendChild(cella_nome_spesa);
    riga_spesa.appendChild(cella_info_spesa);
    riga_spesa.appendChild(cella_valore_spesa);
    riga_spesa.appendChild(cella_categoria_spesa);
    riga_spesa.appendChild(cella_data_spesa);
    tabella_spese.appendChild(riga_spesa);

    // Reset custom category input if it exists
    const customCategoryInput = document.getElementById("custom_category");
    if (customCategoryInput) {
      customCategoryInput.value = '';
    }
  } else {
    alert("Inserisci i dati richiesti");
  }
}

function Spesa_PerCategoria(val_spesa, categoria) {
  const categoryIndex = X_CATEGORIE.indexOf(categoria);
  if (categoryIndex !== -1) {
    Y_VAL_SPESE[categoryIndex] += parseFloat(val_spesa);
    grafico_spese.data.datasets[0].data = Y_VAL_SPESE;
    grafico_spese.update();
  }
}

const AGGIUNGI_SPESA = document.getElementById("AGGIUNGI_SPESA");
AGGIUNGI_SPESA.addEventListener("click", function(event) { 
  event.preventDefault();
  AggiungiSpesa();
});

// Add event listener for category select
document.getElementById("categoria_spesa").addEventListener('change', function(e) {
  const customCategoryDiv = document.getElementById("custom_category_div");
  if (customCategoryDiv) {
    if (this.value === "Altro") {
      customCategoryDiv.innerHTML = `
        <input type="text" 
               id="custom_category" 
               placeholder="Inserisci categoria personalizzata" 
               class="form-control">
      `;
    } else {
      customCategoryDiv.innerHTML = '';
    }
  }
});

// Initialize chart
let grafico_spese = new Chart("grafico_spese", {
  type: "pie",
  data: {
    labels: X_CATEGORIE,
    datasets: [{
      backgroundColor: barColors,
      data: Y_VAL_SPESE
    }]
  },
  options: {
    title: {
      display: true,
      text: "Grafico spese e guadagni 2025",
      fontColor: "#FFFFFF"
    },
    legend: {
      labels: {
        fontColor: "#FFFFFF"
      }
    }
  }
});