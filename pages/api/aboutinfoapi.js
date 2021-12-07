import { aboutInfo } from "../../data/aboutinfo";

export default function handler(req, res) {
    res.status(200).json(aboutInfo)
}