=newGridButton=
________________
|__|__|__|__|__|
|__|__|__|__|__|
|__|__|__|__|__|
|__|__|__|__|__|
|__|__|__|__|__|

Script:
GET the buttonContainer from the HTML
    CREATE Button
    ASSIGN Button id: #newGridBtn
    ASSIGN Button Text: New Grid
    APPEND Button to buttonContainer as child
        (Currently button does nothing)
GET the gridContainer from the HTML
    ASSIGN gridContainer class "frame"
FOR 1 to 16 
    CREATE a new div named rowContainer
    ASSIGN div class "column" and LoopNumber
        FOR 1 to 16 
            CREATE a new div named gridCell
            ASSIGN div class "cell" and LoopNumber
            APPEND to rowContainer as child
        END FOR 
    APPEND to gridContainer as child
END FOR

Style:
frame - width & height to 80% of vh
frame & row - 0 padding, border, margin
frame & row & cell - flexbox (fill)

========watching for events===========
put event listener on button for click
put eventlistener on gridContainer for mouseover - INSIDE create function
    setup switch to route to proper gridcell & count pases

For now just log that event happened.

======event responses======
button clickfunction: remove grid, and replace with user defined.
    removeGridContainer
    run createGrid function


cell mouseoverfucnton: change color