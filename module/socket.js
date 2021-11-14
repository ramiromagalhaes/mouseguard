export default class MouseSocket {

    static async askGoal(data) { 
        //console.log(data);
        
        data.this = this;
        renderTemplate('systems/mouseguard/templates/parts/conflict-manager.hbs', data).then(dlg => {
            new Dialog({
                title: `Conflict Manager`,
                content: dlg,
                buttons: {
                  ok: {
                    label: "Apply",
                    callback: async (html) => {
                      //Do the thing
                      data.this.goalManager(html,data);
                    },
                  },
                  cancel: {
                    label: "Cancel",
                  },
                },
              }).render(true);
        });

    }

    static async goalManager(html,data) {
        let conflictGoal = html.find("#conflict_goal")[0].value;
        //console.log(conflictGoal)
        await game.socket.emit('system.mouseguard', {action: "setGoal", combat: data.combat._id, goal:conflictGoal });
        //combat.setFlag('mouseguard','goal',conflictGoal)
    }


    static async setGoal(data) {
        if (game.user.isGM) {
            console.log(data)
            let combat = game.combats.get(data.combat);
            combat.setFlag('mouseguard','goal',data.goal)
            console.log(combat);
        }
    }

    static async askMoves(data) { 
 

        //console.log(data);
        renderTemplate('systems/mouseguard/templates/parts/conflict-move-manager.hbs', data).then(dlg => {
                    new Dialog({
                        title: `Conflict Manager`,
                        content: dlg,
                        buttons: {
                        ok: {
                            label: "Apply",
                            callback: async (html) => {
                            //Do the thing
                            let Move1Actor = html.find("#move0-actor")[0].value;
                            let Move1Move = html.find(".move0:checked").val()  //$('input[name="name_of_your_radiobutton"]:checked').val();
                            let Move2Actor = html.find("#move1-actor")[0].value;
                            let Move2Move = html.find(".move1:checked").val()  //$('input[name="name_of_your_radiobutton"]:checked').val();
                            let Move3Actor = html.find("#move2-actor")[0].value;
                            let Move3Move = html.find(".move2:checked").val()  //$('input[name="name_of_your_radiobutton"]:checked').val();
                             //console.log(moveData);

                            let CombatantData = {[Move1Actor]:[], [Move2Actor]:[], [Move3Actor]: []};
                            CombatantData[Move1Actor].push({move: Move1Move, combatant: Move1Actor});
                            CombatantData[Move2Actor].push({move: Move2Move, combatant: Move2Actor});
                            CombatantData[Move3Actor].push({move: Move3Move, combatant: Move3Actor});
                            let moveData = {action: 'setMoves', combat:data.combat, data: CombatantData};

                            //TODO:
                             // Concat move data so that it is aranged by actor? Make each actor have a single object of all moves for that actor

                             await game.socket.emit('system.mouseguard',moveData);

                        },
                        },
                        cancel: {
                            label: "Cancel",
                        },
                        },
                    }).render(true);
                });
    }

    static async moveManger(html,data){

    }

    static async setMoves(data) {
        if (game.user.isGM) {
            console.log(data)
            let combat = game.combats.get(data.combat._id);
            //combat.setFlag('mouseguard','goal',data.goal)
            let x = Object.keys(data.data).length;
            for (const key of Object.keys(data.data)) {
                let combantant = combat.combatants.get(key);
                await  combantant.setFlag('mouseguard','Moves',data.data[key]);
            }
            //Object.keys(data.data).forEach(key => {
            //    let combantant = combat.combatants.get(key);
            //    return combantant.setFlag('mouseguard','Moves',data.data[key]);
            //});
        }
    }

}
