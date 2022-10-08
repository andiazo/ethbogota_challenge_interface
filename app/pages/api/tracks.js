export default function handler(req, res) {
    const track = {
        'empty': {
            title: '',
            data: [{}]
        },
        0: {
            title: 'ABC Básico',
            data: [{"track": 0,  "playbackId": "87b5b3urybkhinp5"}, {"track": 0,  "playbackId": "87b5b3urybkhinp5"}]
        }
    }
    let result = track['empty']
    if(req.query.id >= 0) 
        result = track[req.query.id]
    res.status(200).json(result)
}