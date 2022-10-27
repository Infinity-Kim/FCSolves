/*
    На тимбилдинге коллег разделили на 2 команды для игры в футбол.

    Две команды, названные «A» и «B», состоят из 11 игроков в каждой (игроки пронумерованы от 1 до 11).
    Любой игрок может быть удален с поля, получив красную карточку.
    Игрок также может получить желтую карточку-предупреждение.
    А вот две желтые карточки - это удаление с поля (в этом случае красная карточка не нужна).

    Карточка — это строка с буквой команды («A» или «B»), номером игрока и цветом карты («Y» или «R»).
    Например, карточка «B7Y» означает, что игрок № 7 из команды B получил желтую карточку (все буквы в верхнем регистре).

    Задача: по списку карточек (может быть пустым) вернуть количество оставшихся игроков в каждой команде в конце игры.
    Результат верните в виде массива из 2 целых чисел, сначала команда «А»).

    Минимальное количество игроков в команде - 7.
    Если их стало меньше, то вы должны остановить расчет.

    Пример:
    footballPlayersCount(["A4Y", "A4Y"]); // вернет [10,11]
*/

/**
 * Количество игроков в командах после обработки карточек
 * @param {string[]} cards
 * @returns {number[]}
 * @example
 * footballPlayersCount(["A4Y", "A4Y"]); // вернет [10,11]
 */
const footballPlayersCount = (cards) => {
    if (cards.length === 0) return [11, 11];

    const teams = {
        A: {
            players: 11, // количество игроков в команде
            yellowCards: new Set(), // Номера игроков, которые получили желтую карточку
        },
        B: {
            players: 11,
            yellowCards: new Set(),
        }
    }

    const isMinPlayers = () => teams.A.players >= 7 && teams.B.players >= 7;

    cards.forEach(card => {
        const [team, player, color] = card.split('');

        if (color === 'Y') {
            if (teams[team].yellowCards.has(player)) {
                teams[team].players--;
                teams[team].yellowCards.delete(player);
                return isMinPlayers();
            } else {
                teams[team].yellowCards.add(player);
            }
        } else if (color === 'R') {
            teams[team].players--;
            return isMinPlayers();
        }
    });

    return [teams.A.players, teams.B.players];
};

// Локальные тесты
console.log(footballPlayersCount(["A4Y", "A4Y"])); // вернет [10,11]
