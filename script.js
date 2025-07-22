document.getElementById("addTaskBtn").addEventListener("click", function () {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        // ✅ Create the "check" button
        const checkBtn = document.createElement("button");
        checkBtn.textContent = "✔"; // You can use ✅ or ✓ too
        checkBtn.classList.add("check-btn");

        checkBtn.addEventListener("click", function () {
            li.classList.toggle('done')
        });

        // 🗑️ Create the "delete" button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️"; // Or use ✖ or ❌
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });
        // 👉 Add the buttons to the list item
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);

        // Add the list item to the list
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
});
document.getElementById("del").addEventListener("click", () => {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // Remove all list items
  localStorage.removeItem("tasks"); // Clear saved tasks
});