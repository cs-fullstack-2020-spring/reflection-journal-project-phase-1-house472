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





const journalEntriesArray = [
    {
        creation_date: creation_date_el.value,
        journal_entry: journal_entry_el.value,
        confidence_level: confidence_level_el.value
    }
    ];
    journalEntriesArray.push()
console.log(journalEntriesArray[0])

submit_entry_button_el.addEventListener("click", mySubmit)