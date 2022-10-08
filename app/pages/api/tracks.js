export default function handler(req, res) {
    const track = {
        0: {
            title: 'ABC Básico',
            data: [{"track": 0,  "playbackId": "87b5b3urybkhinp5"}, {"track": 0,  "playbackId": "87b5b3urybkhinp5"}]
        },
        1: {
            title: 'ABC Básico',
            data: [{"track": 0,  "playbackId": "87b5b3urybkhinp5"}, {"track": 0,  "playbackId": "87b5b3urybkhinp5"}]
        },
        2: {
            title: 'ABC Básico',
            data: [{"track": 0,  "playbackId": "87b5b3urybkhinp5"}, {"track": 0,  "playbackId": "87b5b3urybkhinp5"}]
        },
        3: {
            title: 'ABC Básico',
            data: [{"track": 0,  "playbackId": "87b5b3urybkhinp5"}, {"track": 0,  "playbackId": "87b5b3urybkhinp5"}]
        }
    }
    let result = ''
    if(req.query.id in track) 
        result = track[req.query.id]
    res.status(200).json(result)
}