import { pricingInfo } from "../../data/pricinginfo"

export default function handler(req, res) {
    res.status(200).json(pricingInfo)
}