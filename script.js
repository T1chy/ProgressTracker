let taskList = [];
let currentDay = 1;

function addTask() {
    let taskName = document.getElementById('taskName').value;
    let completion = document.getElementById('completion').value;
    let dayNumber = document.getElementById('dayNumber').value;
    let day = "Day " + dayNumber;

    // Check if a task with the same name has been added before
    let existingTask = taskList.find(task => task.taskName === taskName);
    if (existingTask) {
        // Increment the day counter only if the task with the same name is found
        currentDay++;
    }

    if (taskName && completion && dayNumber) {
        taskList.push({taskName, completion, day});
        displayTasks();
    }
}



function displayTasks() {
    let taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    taskList.forEach((task, index) => {
        taskListContainer.innerHTML += `<div>${task.day}: Task: ${task.taskName}, Finished: ${task.completion}%</div>`;
    });
}

function captureScreen() {
    // Capture the container element
    html2canvas(document.getElementById('container'), {
        onrendered: function(canvas) {
            // Convert the canvas to a data URL
            let imgData = canvas.toDataURL('image/png');
            
            // Create a link element to download the image
            let link = document.createElement('a');
            link.download = 'progress_tracker.png';
            link.href = imgData;
            link.click();
        }
    });
}


// function captureScreen() {
//     console.log("Capture button clicked");
//     // Rest of the code...
// }


