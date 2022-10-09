export default function handler(req, res) {
    const track = {
        0: {
            title: 'Web3 Básico',
            data: [
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"},
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"}
            ]
        },
        1: {
            title: 'Web3 Intermedio',
            data: [
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"},
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"}
            ]
        },
        2: {
            title: 'Web3 Avanzado',
            data: [
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"}, 
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"}
            ]
        },
        3: {
            title: 'Web3 Expert',
            data: [
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"}, 
                {"track": 0,  "playbackId": "87b5b3urybkhinp5"}
            ]
        }
    }
    let result = ''
    if(req.query.id in track) 
        result ={
            title:  track[req.query.id].title,
            data: [
                track[req.query.id].data[0]
            ]
        }
    console.log(req);
    res.status(200).json(result)
}