const Ad = require('../models/ad.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Ad.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const ad = await Ad.find({ id: req.params.id});
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getBySearchPhrase = async (req, res) => {
  try {

      const ad = await Ad.find({
        $or: [
          { title: {$regex: req.params.searchPhrase, options: 'i' } },
          { content: {$regex: req.params.searchPhrase, options: 'i' } }
        ]})

      res.json(ad);
    } 
    catch (err) {
      res.status(500).json({ message: err });
    };
  };

exports.post = async (req, res) => {
  console.log('POST', req.body)
  const { title, content, price, date, photo, localization } = req.body;
  try {
    const newAd = new Ad({
      title: title, 
      content: content, 
      price: price,
      date: date,
      photo: photo,
      localization: localization
    });
    await newAd.save();
    res.json({ message: 'OK', ad: newAd });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.put = async (req, res) => {
  const { title, content, price, date, photo, localization } = req.body;
  
  try {
    const ad = await Ad.findById(req.params.id);
    if (ad) {
      ad.title = title;
      ad.content = content;
      ad.price = price;
      ad.date = date;
      ad.photo = photo;
      ad.localization = localization;
      await ad.save();
      res.json({ message: 'OK', ad: ad });
  } 
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (ad) {
      await ad.deleteOne({_id: req.params.id});
      res.json({ message: 'OK', ad: ad });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
