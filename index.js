let creation_date_el = document.querySelector("#creation_date")
let journal_entry_el = document.querySelector("#journal_entry")
let submit_entry_button_el = document.querySelector("#submit_entry")
let confidence_level_el = document.querySelector("#confidence_level")
let journal_entry_object = {}



let mySubmit = (evt) => 
{
    evt.preventDefault()
    journal_entry_object = 
    {
        creation_date: creation_date_el.value,
        journal_entry: journal_entry_el.value,
        confidence_level: confidence_level_el.value

    }
    console.log(`Created on ${journal_entry_object.creation_date}
                 Journal Entry ${journal_entry_object.journal_entry},
                 Confidence level: ${journal_entry_object.confidence_level}`)

                                 
}

// - After each submisson
//     - Add the entry to the `journalEntries` array
//     - Use a function that you implement to iterate the list of entries, and using template literals, render all of the entries in the DOM

let journal_entry_capture = journal_entry_object

const journalEntriesArray = [
    {
        creation_date: journal_entry_capture.creation_date,
        journal_entry: journal_entry_capture.journal_entry,
        confidence_level: journal_entry_capture.confidence_level
    }
    ];
    function collect_data(){
        creation_date_el = document.querySelector("#creation_date").value
    }
    console.log(creation_date_el.value)
    journalEntriesArray.push(journal_entry_capture)
console.log(journalEntriesArray[0])

submit_entry_button_el.addEventListener("click", mySubmit)