import { useSports, Game_OrderBy } from '@azuro-org/sdk'

const useData = () => {
    const props = {
        gameOrderBy: Game_OrderBy.Turnover,
        filter: {
            limit: 10,
        }
    }
    const { loading, sports } = useSports({ ...props });
    let topGame = [];
    if (sports.length) {
        let gameList = []
        const sortedGame = sports?.flatMap(sport =>
            sport?.countries.flatMap(country =>
                country.leagues.flatMap(league =>
                    league.games
                )
            )
        ).sort((a, b) => b.turnover - a.turnover);
        sortedGame.forEach(game => gameList.push(game));

        topGame = gameList.slice(0, 5);

        console.log("Top Game", topGame);

        console.log("Game List", gameList);
    }


    return {
        sports,
        loading,
        topGame
    }
}

function Test() {
    const { loading, sports, topGame } = useData()

    const dataItems = topGame.map(game => {
        return (
            <li>{game.league.name + ' * ' + game.title}</li>
        )
    })
    return (
        <div>
            {dataItems}
        </div>
    );
}

export default Test;