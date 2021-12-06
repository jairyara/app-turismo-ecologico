/* eslint-disable */
export class Place {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _desc: string;
  private readonly _long: string;
  private readonly _lat: string;
  private readonly _imageUrl: string;


  constructor(placeArray: any) {
    this._id = placeArray['_id'];
    this._name = placeArray.name ?? placeArray._name;
    this._desc = placeArray.desc ?? placeArray._desc;
    this._long = placeArray.long ?? placeArray._long;
    this._lat = placeArray.lat ?? placeArray._lat;
    this._imageUrl = placeArray.imageUrl ?? placeArray._imageUrl;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get desc(): string {
    return this._desc;
  }

  get long(): string {
    return this._long;
  }

  get lat(): string {
    return this._lat;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }
}
