async function predict() {
    const sequence = document.getElementById("sequence").value.trim();
    const loading = document.getElementById("loading");
    const result = document.getElementById("result");
    const error = document.getElementById("error");
    const info = document.getElementById("info"); // optional info element

    if (!sequence) {
        error.textContent = "Please enter a protein sequence.";
        error.classList.remove("hidden");
        return;
    }

    error.classList.add("hidden");
    result.classList.add("hidden");
    loading.classList.remove("hidden");

   
    if (info) {
        info.textContent = "Note: If the service was idle, it may take up to 1-2 minutes to start.";
        info.classList.remove("hidden");
    }

    try {
        const response = await fetch("https://protein2-api-cpu.onrender.com/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ seq: sequence })
        });

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        document.getElementById("sst8").textContent = data.sst8;
        document.getElementById("sst8_conf").textContent =
            (data.sst8_confidence * 100).toFixed(2) + "%";

        document.getElementById("sst3").textContent = data.sst3;
        document.getElementById("sst3_conf").textContent =
            (data.sst3_confidence * 100).toFixed(2) + "%";

        result.classList.remove("hidden");

    } catch (err) {
        error.textContent = "Error running inference. Check API or network.";
        error.classList.remove("hidden");
    } finally {
        loading.classList.add("hidden");
        if (info) info.classList.add("hidden"); // hide note after response
    }
}
