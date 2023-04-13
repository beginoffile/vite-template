import { defineConfig } from 'vite';

export default defineConfig(({command, mode, ssrBuild} ) =>
{
    if (mode === 'development') {
        return {
                root: 'src',
                base:'',
                // assetsInclude:['src/assets/img/*.jpg'],
                plugins:[],
                build:{
                emptyOutDir:true,         
                }
            }
    } else {
        return {
            root: 'src',
            base:'',
            // assetsInclude:['src/assets/img/*.jpg'],
            plugins:[],
            build:{
                outDir: 'dist',
                emptyOutDir:true,         
            }
        }
    }
});
  