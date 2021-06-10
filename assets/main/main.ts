
import { _decorator, Component, Node ,assetManager,Prefab,AudioClip,SpriteFrame} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {

    start () {
        assetManager.loadBundle('pkg1', (err, bundle) => {
            debugger
            if (err) {
                return console.error(err)
            }
            // console.log('bundle = ',bundle)

            // var infos:any = []
            // bundle.getDirWithPath('images', Texture2D, infos);

            bundle.load('prefab-1', Prefab, null, (err, asset) => {
                console.log('asset = ',asset)
                if(err){
                    console.log(err)
                }
            
            })

            bundle.load('win', AudioClip, null, (err, asset) => {
                console.log('asset = ',asset)
                if(err){
                    console.log(err)
                }
            
            })

            bundle.load('hello', SpriteFrame, null, (err, asset) => {
                console.log('SpriteFrame = ',asset)
                if(err){
                    console.log(err)
                }
            
            })


            

        })

    }

}

 
