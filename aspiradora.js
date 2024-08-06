function reflex_agent(location, state) {
    if (state === "SUCIO") {
        return 'CLEAN';
    } else if (location === 'A') {
        return 'RIGHT';
    } else if (location === 'B') {
        return 'LEFT';
    }
}

function test(states) {
    const visitedStates = new Set();
    const totalStates = new Set(['A_SUCIO', 'A_LIMPIO', 'B_SUCIO', 'B_LIMPIO']);

    function iterate() {
        const location = states[0];
        const state_A = states[1];
        const state_B = states[2];

        const currentState = `${location}_${state_A}_${state_B}`;
        visitedStates.add(currentState);

        const action = reflex_agent(location, state_A);

        console.log("Location: " + location + " | Action: " + action + " | Current State: " + currentState);
        console.log("Estados visitados:", Array.from(visitedStates));

        if (action === "CLEAN") {
            if (location === 'A') {
                states[1] = "LIMPIO";
            } else if (location === 'B') {
                states[2] = "LIMPIO";
            }
        } else if (action === "RIGHT") {
            states[0] = 'B';
        } else if (action === "LEFT") {
            states[0] = 'A';
        }

        if (visitedStates.size === totalStates.size) {
            console.log("Todos los estados han sido alcanzados. Finalizando la ejecución.");
        } else {
            setTimeout(iterate, 3000);
        }
    }

    iterate();
}

// Ejecución inicial con el estado ['A', 'SUCIO', 'SUCIO']
test(['A', 'SUCIO', 'SUCIO']);
