- get /notes returns the notes.html

-* at bottom returns the index.html (home page)

- db.json file on backend, used to store and retrieve notes using the fs module

CREATE these routes:
    GET /api/notes - Should read the db.json file and 
                   - return all saved notes as JSON.
    
    POST /api/notes - Should receive a new note to save on the request body, 
                    - add it to the db.json file, 
                    - and then return the new note to the client.


DELETE /api/notes/:id 
- Should receive a query parameter containing the id of a note to delete. 
- This means need to find a way to give each note a unique id when it's saved. 
- In order to delete a note, need to read all notes from the db.json file, 
- and remove the note with the given id property, 
- and then rewrite the notes to the db.json file.