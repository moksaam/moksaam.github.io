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

//Inheritance function
document.body.onload = function adventurers() {

    function adventurer(_class, _race, _weapon, _armor) {
        this._class  = _class;
        this._race   = _race;
        this._weapon = _weapon;
        this._armor  = _armor;
    };

    adventurer();

    var warrior = new adventurer ('Warrior', 'Human', 'Longsword', 'Chainmail');
    var wizard = new adventurer ('Wizard', 'Dwarf', 'Staff', 'Red Robes');
    var cleric = new adventurer ('Cleric', 'Human', 'Mace', 'Scalemail');
    var bard = new adventurer ('Bard', 'Elf', 'Rapier', 'Leather');
    var thief = new adventurer ('Thief', 'Halfling', 'Hand Crossbow', 'Padded Leather');
    
    var quest = "The young " + warrior._race + " " + warrior._class + " gathered his friends the " + wizard._race + " " + wizard._class + ", the " + cleric._race + " " + cleric._class + ", the " + bard._race + " " + bard._class + ", and the " + thief._race + " " + thief._class + " to go on an adventure. He grabbed his trusty " + warrior._weapon + " and donned his " + warrior._armor + " and then they hit the road.";
    document.getElementById("adventurers").innerHTML = quest;
};