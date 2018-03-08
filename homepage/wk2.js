//Object Creation Function JS
document.body.onload = function showEquipment() {

    var equipment = {};
    equipment.head = "Black Top Hat";
    equipment.body = "Black Tie Tuxedo";
    equipment.back = "Flowing Cape";
    equipment.hands = "White Gloves";
    equipment.feet = "Black Dress Shoes";

    var magicianOutfit = "Head Worn: " + equipment.head + ", Body Worn: " + equipment.body + ", Back Worn: " + equipment.back + ", Hands Worn: " + equipment.hands + ", Feet Worn: " + equipment.feet;
    document.getElementById("magicianOutfit").innerHTML += magicianOutfit;
};

