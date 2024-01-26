import generateSignedUrl from "../s3.js"

export const getSignedUrl = async(req,res) => {
  const url = await generateSignedUrl();
  res.status(200).json({url});
}