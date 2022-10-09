export default function handler(req, res) {
    const track = {
        0: {
            title: 'Web3 Básico',
            data: [
                {"track": 0, "playbackId": "8c4byfgnd6zwteyj"},
                {"track": 0, "playbackId": "405aptiqgeouz1c6"},
                {"track": 0, "playbackId": "2233j67hrvzkjalm"},
                {"track": 0, "playbackId": "961ea5czk5bds3be"}
            ]
        },
        1: {
            title: 'Web3 Intermedio',
            data: []
        },
        2: {
            title: 'Web3 Avanzado',
            data: []
        },
        3: {
            title: 'Web3 Expert',
            data: []
        }
    }
    let result = ''
    if(req.query.id in track) 
        result = track[req.query.id]

    console.log(req);
    res.status(200).json(result)
}