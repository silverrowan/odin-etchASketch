# etchASketch
Etch-a-sketch like project per The Odin Project
https://www.theodinproject.com/lessons/foundations-etch-a-sketch

Baseline project and both extended components are complete and 
apply simultaneously.

A grid of 16x16 squares is generated, and the color of each square 
changes as you mouseover it. The new color is a random (light) color,
and the trace gets darker by 10% for each grid square it passes. 

The grid can be redrawn to any size up to 100 squares by clicking
the reset grid button.

When clicked: A prompt appears, asking for the size of grid to draw. 
If a non-number or restricted number (not an integer between 1-100, 
inclusive) is entered, an alert followed by re-prompt appears.

When a number between 1-100 is entered, the current grid is removed, 
and a new clean grid is created of the size specified.