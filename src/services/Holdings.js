export const getHoldings = async () => {
    try {
        let response = await fetch('https://canopy-frontend-task.now.sh/api/holdings');
        response = await response.json();
        return response;
    } catch (err) {
        //Error handling
        console.error(err);
        return err;
    }

}