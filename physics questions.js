//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Every single thing in the universe are consisted of the smallest item. This item is called"
choice1[1]="Substance"
choice1[2]="Element"
choice1[3]="Molecule"
choice1[4]="Atom"

question[2]="There is an experiment to see the movement of a gas molecules done by a scientist. The result was a movement seen under a microscope. What is the name of this movement?"
choice2[1]="Extensian"
choice2[2]="Flexian"
choice2[3]="Brownian"
choice2[4]="Newtonian"

question[3]="A person wearing steel toe capped boots and a person wearing stilleto heels stand on a wooden floor. They both have the same weight. Which person exerts a greater pressure on the floor?"
choice3[1]="The person with the stiletto heels because they have a larger surface area in contact with the floor"
choice3[2]="The person with the stiletto heels because they have a smaller surface area in contact with the floor"
choice3[3]="The person wearing the boots because the boots have a smaller surface area in contact with the floor"
choice3[4]="The person wearing the boots because the boots have a larger surface area in contact with the floor"

question[4]="What is thermal expansion?"
choice4[1]="An increase in materials volume when temperature increases"
choice4[2]="The transfer of thermal energy between materials by the collisions of particles"
choice4[3]="Chicken fried rice"
choice4[4]="A decrease in a materials volume when temperature decreases"

question[5]="Bimetallic strips are commonly found in all of the following except?"
choice5[1]="electric iron"
choice5[2]="clinic thermometer"
choice5[3]="refrigerator"
choice5[4]="rice cooker"

question[6]="What is the SI unit for measuring length?"
choice6[1]="second"
choice6[2]="gram"
choice6[3]="meter"
choice6[4]="liter"

question[7]="What is the formula for calculating density?"
choice7[1]="mass x weight"
choice7[2]="mass - volume"
choice7[3]="mass/volume"
choice7[4]="density x volume"

question[8]="What is the purpose of using a micrometer screw gauge in measurements?"
choice8[1]="to measure temperature accurately"
choice8[2]="to measure large dimensions with low precision"
choice8[3]="to measure small dimensions with high precision"
choice8[4]="to measure time interval precisely"

question[9]="What is the significance of using a stopwatch in physics experiments?"
choice9[1]="To measure the time taken for an event to occur"
choice9[2]="To determine the weight of an object"
choice9[3]="To calculate the volume of a liquid"
choice9[4]="To count the number of atoms in a substance"

question[10]="What are the precautions to be taken while using a measuring tape for length measurements?"
choice10[1]="Hold the tape with one hand and measure with the other"
choice10[2]="Let the tape dangle loosely while taking measurements"
choice10[3]="Use the measuring tape without checking for accuracy"
choice10[4]="Ensure the tape is straight and not twisted, and hold it firmly in place."


solution[1]="d"
solution[2]="c"
solution[3]="b"
solution[4]="a"
solution[5]="b"
solution[6]="c"
solution[7]="c"
solution[8]="c"
solution[9]="a"
solution[10]="d"

