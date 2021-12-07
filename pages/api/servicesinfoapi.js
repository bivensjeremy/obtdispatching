import { servicesInfo } from "../../data/servicesinfo"

export default function handler(req, res) {
    res.status(200).json(servicesInfo)
}