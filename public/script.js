fetch('/api/resume')
    .then(r => r.json())
    .then(d => {

        if (document.getElementById("name"))
            document.getElementById("name").innerText = d.personal.name;

        if (document.getElementById("role"))
            document.getElementById("role").innerText = d.personal.role;

        if (document.getElementById("summary"))
            document.getElementById("summary").innerText = d.summary;

        if (document.getElementById("core-skills"))
            [...d.skills.frontend, ...d.skills.backend, ...d.skills.devops]
                .slice(0, 8)
                .forEach(s => {
                    let e = document.createElement("span");
                    e.innerText = s;
                    document.getElementById("core-skills").appendChild(e);
                });

        if (document.getElementById("skills"))
            Object.values(d.skills).flat().forEach(s => {
                let li = document.createElement("li");
                li.innerText = s;
                document.getElementById("skills").appendChild(li);
            });

        if (document.getElementById("projects"))
            d.projects.forEach(p => {
                let div = document.createElement("div");
                div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p>`;
                document.getElementById("projects").appendChild(div);
            });

        if (document.getElementById("contact")) {
            document.getElementById("contact").innerText =
                `${d.personal.email} | ${d.personal.phone} | ${d.personal.location}`;
        }
    })
    .catch(() => {});
