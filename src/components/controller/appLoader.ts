import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL as string, {
            apiKey: process.env.API_KEY as string,
        });
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Record<string, any> },
        callback: (data: any) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        // Добавляем API ключ в options, если он есть
        const finalOptions = { ...options, apiKey: this.options.apiKey };
        super.getResp({ endpoint, options: finalOptions }, callback);
    }
}

export default AppLoader;
