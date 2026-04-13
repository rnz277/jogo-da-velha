// Player de música lalala.mp3 com controle de volume
window.addEventListener('DOMContentLoaded', function() {
    // Seletor de idioma com bandeiras
    if (!document.getElementById('idiomaSelect')) {
        const langDiv = document.createElement('div');
        langDiv.id = 'idiomaLangDiv';
        langDiv.style.display = 'flex';
        langDiv.style.alignItems = 'center';
        langDiv.style.gap = '10px';
        langDiv.style.marginBottom = '10px';
        langDiv.style.position = 'fixed';
        langDiv.style.right = '24px';
        langDiv.style.bottom = '90px';
        langDiv.style.zIndex = '10000';
        langDiv.style.background = 'rgba(0,30,60,0.85)';
        langDiv.style.borderRadius = '10px';
        langDiv.style.boxShadow = '0 2px 8px #001a3a44';
        langDiv.style.padding = '7px 16px';
        const label = document.createElement('span');
        label.textContent = 'Idioma:';
        label.style.color = '#fff';
        label.style.fontWeight = 'bold';
        label.style.marginRight = '6px';
        langDiv.appendChild(label);
        const idiomaSelect = document.createElement('select');
        idiomaSelect.id = 'idiomaSelect';
        idiomaSelect.style.background = '#001a3a';
        idiomaSelect.style.color = '#00bfff';
        idiomaSelect.style.border = '2px solid #00bfff';
        idiomaSelect.style.borderRadius = '8px';
        idiomaSelect.style.fontSize = '1em';
        idiomaSelect.style.padding = '4px 8px';
        idiomaSelect.style.outline = 'none';
        idiomaSelect.style.boxShadow = '0 1px 4px #001a3a44';
        idiomaSelect.style.cursor = 'pointer';
        // Opções com bandeiras
        const idiomas = [
            { value: 'br', label: '🇧🇷 Português', musica: 'static/audio/lalala.mp3' },
            { value: 'en', label: '🇺🇸 English', musica: 'static/audio/english.mp3' },
            { value: 'es', label: '🇪🇸 Español', musica: 'static/audio/espanol.mp3' },
            { value: 'ar', label: '🇸🇦 Árabe', musica: 'static/audio/arabic.mp3' },
            { value: 'de', label: '🇩🇪 Alemão', musica: 'static/audio/german.mp3' }
        ];
        idiomas.forEach(idioma => {
            const opt = document.createElement('option');
            opt.value = idioma.value;
            opt.textContent = idioma.label;
            idiomaSelect.appendChild(opt);
        });
        langDiv.appendChild(idiomaSelect);
        document.body.appendChild(langDiv);

        // Troca a música ao trocar idioma
        // Traduções dos principais textos
        const traducoes = {
            br: {
                quemComeca: 'Quem começa:',
                mandante: 'Mandante',
                visitante: 'Visitante',
                reiniciar: 'Reiniciar',
                musica: 'Música:',
                pausar: 'Pausar',
                volume: 'Volume:',
                modo: 'Modo de Jogo:',
                mandanteIcon: 'Mandante',
                visitanteIcon: 'Visitante',
                ganhador: 'Ganhador:',
                jogAtual: 'Jogador Atual:',
                historico: '📊 Histórico',
                historicotitulo: 'Histórico de Partidas',
                limparhistorico: 'Limpar Histórico',
                twoPlayers: '2 Jogadores',
                vsCPU: 'Contra a Máquina',
                venceu: 'Venceu',
                empate: 'Empate',
                nenhumaPartida: 'Nenhuma partida jogada ainda',
                'Manchester City': 'Manchester City',
                'Barcelona': 'Barcelona',
                'Manchester United': 'Manchester United',
                'Real Madrid': 'Real Madrid',
                
            },
            en: {
                quemComeca: 'Who starts:',
                mandante: 'Home',
                visitante: 'Away',
                reiniciar: 'Restart',
                musica: 'Music:',
                pausar: 'Pause',
                volume: 'Volume:',
                modo: 'Game Mode:',
                mandanteIcon: 'Home',
                visitanteIcon: 'Away',
                ganhador: 'Winner:',
                jogAtual: 'Current Player:',
                historico: '📊 History',
                historicotitulo: 'Match History',
                limparhistorico: 'Clear History',
                twoPlayers: '2 Players',
                vsCPU: 'vs Computer',
                venceu: 'Won',
                empate: 'Draw',
                nenhumaPartida: 'No matches played yet',
                'Manchester City': 'Manchester City',
                'Barcelona': 'Barcelona',
                'Manchester United': 'Manchester United',
                'Real Madrid': 'Real Madrid',
                partidas: 'Match History',
                empates: 'Draws',
                vitorias: 'Wins',
                campeaoes: 'Champions List',
                escudo: 'Shield',
                time: 'Team'

            },
            es: {
                quemComeca: 'Quién empieza:',
                mandante: 'Local',
                visitante: 'Visitante',
                reiniciar: 'Reiniciar',
                musica: 'Música:',
                pausar: 'Pausar',
                volume: 'Volumen:',
                modo: 'Modo de Juego:',
                mandanteIcon: 'Local',
                visitanteIcon: 'Visitante',
                ganhador: 'Ganador:',
                jogAtual: 'Turno de:',
                historico: '📊 Historial',
                historicotitulo: 'Historial de Partidas',
                limparhistorico: 'Limpiar Historial',
                twoPlayers: '2 Jugadores',
                vsCPU: 'Contra la Máquina',
                venceu: 'Ganó',
                empate: 'Empate',
                nenhumaPartida: 'Ninguna partida jugada aún',
                'Manchester City': 'Manchester City',
                'Barcelona': 'Barcelona',
                'Manchester United': 'Manchester United',
                'Real Madrid': 'Real Madrid',
                partidas: 'Historial de Partidas',
                empates: 'Empates',
                vitorias: 'Victorias',
                campeaoes: 'Lista de Campeones',
                escudo: 'Escudo',
                time: 'Equipo'
            },
            ar: {
                quemComeca: 'من يبدأ:',
                mandante: 'المضيف',
                visitante: 'الضيف',
                reiniciar: 'إعادة',
                musica: 'الموسيقى:',
                pausar: 'إيقاف',
                volume: 'الصوت:',
                modo: 'وضع اللعبة:',
                mandanteIcon: 'المضيف',
                visitanteIcon: 'الضيف',
                ganhador: 'الفائز:',
                jogAtual: 'الدور الحالي:',
                historico: '📊 السجل',
                historicotitulo: 'سجل المباريات',
                limparhistorico: 'مسح السجل',
                twoPlayers: 'لاعبان',
                vsCPU: 'ضد الكمبيوتر',
                venceu: 'فاز',
                empate: 'تعادل',
                nenhumaPartida: 'لم يتم لعب أي مباريات بعد',
                'Manchester City': 'مانشستر سيتي',
                'Barcelona': 'برشلونة',
                'Manchester United': 'مانشستر يونايتد',
                'Real Madrid': 'ريال مدريد',
                partidas: 'سجل المباريات',
                empates: 'تعادلات',
                vitorias: 'انتصارات',
                campeaoes: 'قائمة الأبطال',
                escudo: 'شعار',
                time: 'فريق'

            },
            de: {
                quemComeca: 'Wer beginnt:',
                mandante: 'Heim',
                visitante: 'Gast',
                reiniciar: 'Neustart',
                musica: 'Musik:',
                pausar: 'Pause',
                volume: 'Lautstärke:',
                modo: 'Spielmodus:',
                mandanteIcon: 'Heim',
                visitanteIcon: 'Gast',
                ganhador: 'Gewinner:',
                jogAtual: 'Aktueller Spieler:',
                historico: '📊 Verlauf',
                historicotitulo: 'Spielverlauf',
                limparhistorico: 'Verlauf löschen',
                twoPlayers: '2 Spieler',
                vsCPU: 'gegen Computer',
                venceu: 'Gewonnen',
                empate: 'Unentschieden',
                nenhumaPartida: 'Noch keine Spiele gespielt',
                'Manchester City': 'Manchester City',
                'Barcelona': 'Barcelona',
                'Manchester United': 'Manchester United',
                'Real Madrid': 'Real Madrid',
                campeaoes: 'Meisterliste',
                partidas: 'Spielverlauf',
                escudo: 'Wappen',
                time: 'Team',
                vitorias: 'Siege',
                empates: 'Unentschieden'
            }
        };
        // Disponibiliza globalmente para Game.render
        window.traducoes = traducoes;

        function aplicarTraducoes(idiomaValue) {
            const t = traducoes[idiomaValue] || traducoes.br;
            // Quem começa
            const quemLabel = document.querySelector('.who-starts-group label');
            if (quemLabel) quemLabel.textContent = t.quemComeca;
            // Mandante/Visitante nos selects - usa IDs específicos
            const labelTeamX = document.getElementById('labelTeamX');
            const labelTeamO = document.getElementById('labelTeamO');
            if (labelTeamX) labelTeamX.textContent = t.mandante + ' (X): ';
            if (labelTeamO) labelTeamO.textContent = t.visitante + ' (O): ';
            // Ícones
            const teamIcons = document.querySelectorAll('.team-icon');
            if (teamIcons[0]) teamIcons[0].title = t.mandanteIcon;
            if (teamIcons[1]) teamIcons[1].title = t.visitanteIcon;
            // Botão reiniciar (procura no main-container)
            const container = document.querySelector('.main-container');
            if (container) {
                const btns = container.querySelectorAll('button');
                if (btns && btns[btns.length - 1]) {
                    btns[btns.length - 1].textContent = t.reiniciar;
                }
            }
            // Música/Volume e botão play/pause
            const musicPlayer = document.getElementById('musicPlayer');
            if (musicPlayer) {
                const label = musicPlayer.querySelector('label');
                if (label) label.textContent = t.musica + ' ';
                const playBtn = musicPlayer.querySelector('button');
                if (playBtn) {
                    const isPlaying = !document.getElementById('lalalaAudio')?.paused;
                    playBtn.textContent = isPlaying ? '⏸' : '▶';
                    playBtn.title = isPlaying ? t.pausar : t.musica;
                }
                const volLabel = musicPlayer.querySelector('span');
                if (volLabel) volLabel.textContent = t.volume;
            }
            // Modo de jogo label
            const modoSelect = document.getElementById('modoJogo');
            if (modoSelect) {
                const modoLabel = modoSelect.parentElement?.querySelector('label');
                if (modoLabel) modoLabel.textContent = t.modo;
                // Traduz opções do modo de jogo
                const modoOptions = modoSelect.querySelectorAll('option');
                if (modoOptions[0]) modoOptions[0].textContent = t.twoPlayers;
                if (modoOptions[1]) modoOptions[1].textContent = t.vsCPU;
            }
            // Quem começa select - traduz as opções de forma segura
            const playerSelect = document.getElementById('playerSelect');
            if (playerSelect) {
                try {
                    for (let option of playerSelect.options) {
                        if (option.value === 'X') option.textContent = '🏠 ' + t.mandante;
                        else if (option.value === 'O') option.textContent = '✈️ ' + t.visitante;
                    }
                } catch (e) {
                    console.log('Erro ao traduzir playerSelect:', e);
                }
            }
        }

        idiomaSelect.addEventListener('change', function() {
            // NÃO muda a música ao trocar idioma - deixa continuar tocando
            const playBtn = document.querySelector('#musicPlayer button');
            const audio = document.getElementById('lalalaAudio');
            
            // Apenas atualiza o botão se a música estiver tocando
            if (audio && !audio.paused && playBtn) {
                playBtn.textContent = '⏸ Pausar';
            }
            
            aplicarTraducoes(this.value);
            atualizarBotoesHistorico(this.value);
            // Salva preferência de idioma
            localStorage.setItem('idiomaPreferido', this.value);
            // Atualiza info do jogo (ganhador/jogador atual) imediatamente
            if (window.Game && typeof Game.render === 'function') {
                Game.render();
            }
            // Atualiza o histórico com as novas traduções
            if (window.atualizarHistorico && typeof window.atualizarHistorico === 'function') {
                window.atualizarHistorico();
            }
            // Atualiza a tabela de campeões com as novas traduções
            if (window.atualizarTabelaCampeoes && typeof window.atualizarTabelaCampeoes === 'function') {
                window.atualizarTabelaCampeoes();
            }
        });

        // Garante atualização dos textos sempre que o time for trocado ou o jogo renderizado
        window.aplicarTraducoes = aplicarTraducoes;
        // Recupera idioma salvo ou usa português como padrão
        const idiomaRecuperado = localStorage.getItem('idiomaPreferido') || 'br';
        idiomaSelect.value = idiomaRecuperado;
        // Aplica tradução inicial
        aplicarTraducoes(idiomaRecuperado);
        
        // Atualiza botões de histórico após DOMContentLoaded (caso já existam)
        setTimeout(() => {
            if (window.atualizarBotoesHistorico) {
                window.atualizarBotoesHistorico(idiomaRecuperado);
            }
        }, 100);
        
        // Função para atualizar textos do histórico
        window.atualizarBotoesHistorico = function(idiomaValue) {
            const t = traducoes[idiomaValue] || traducoes.br;
            const historicoBtn = document.getElementById('historico-btn');
            if (historicoBtn) historicoBtn.textContent = t.historico;
            const historicoTitle = document.querySelector('.historico-modal h2');
            if (historicoTitle) historicoTitle.textContent = t.historicotitulo;
            const limparBtn = document.querySelector('.limpar-btn');
            if (limparBtn) limparBtn.textContent = t.limparhistorico;
        };
    }
    if (!document.getElementById('musicPlayer')) {
        const playerDiv = document.createElement('div');
        playerDiv.id = 'musicPlayer';
        playerDiv.style.display = 'flex';
        playerDiv.style.alignItems = 'center';
        playerDiv.style.gap = '12px';
        playerDiv.style.background = 'rgba(0,30,60,0.85)';
        playerDiv.style.borderRadius = '12px';
        playerDiv.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.18), 0 0 0 2px #00bfff33';
        playerDiv.style.padding = '10px 18px';
        playerDiv.style.width = 'fit-content';
        playerDiv.style.position = 'fixed';
        playerDiv.style.right = '24px';
        playerDiv.style.bottom = '24px';
        playerDiv.style.zIndex = '9999';
        playerDiv.style.opacity = '0.95';
        playerDiv.style.transition = 'opacity 0.3s';
        playerDiv.onmouseenter = () => playerDiv.style.opacity = '1';
        playerDiv.onmouseleave = () => playerDiv.style.opacity = '0.85';
        const label = document.createElement('label');
        label.textContent = 'Música: ';
        label.style.color = '#fff';
        label.style.fontWeight = 'bold';
        label.style.letterSpacing = '1px';
        label.style.textShadow = '1px 1px 4px #001a3a';
        const audio = document.createElement('audio');
        audio.src = 'static/audio/HINO.mp3';
        audio.loop = true;
        audio.volume = 0.5;
        audio.autoplay = true;
        audio.style.display = 'none'; // Esconde o player nativo
        audio.id = 'lalalaAudio';

        // Botão customizado de play/pause (apenas ícone)
        const playBtn = document.createElement('button');
        playBtn.textContent = '▶';
        playBtn.style.background = 'linear-gradient(90deg,#00bfff 60%,#001a3a 100%)';
        playBtn.style.color = '#fff';
        playBtn.style.fontWeight = 'bold';
        playBtn.style.fontSize = '1.2em';
        playBtn.style.border = 'none';
        playBtn.style.borderRadius = '8px';
        playBtn.style.padding = '10px 12px';
        playBtn.style.width = '40px';
        playBtn.style.height = '40px';
        playBtn.style.display = 'flex';
        playBtn.style.alignItems = 'center';
        playBtn.style.justifyContent = 'center';
        playBtn.style.marginRight = '8px';
        playBtn.style.cursor = 'pointer';
        playBtn.style.boxShadow = '0 2px 8px #001a3a44';
        playBtn.style.transition = 'background 0.2s, color 0.2s';
        playBtn.onmouseenter = () => playBtn.style.background = 'linear-gradient(90deg,#001a3a 40%,#00bfff 100%)';
        playBtn.onmouseleave = () => playBtn.style.background = 'linear-gradient(90deg,#00bfff 60%,#001a3a 100%)';
        let tocando = true;
        playBtn.textContent = '⏸';
        playBtn.title = 'Pausar Música';
        playBtn.onclick = function() {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = '⏸';
                playBtn.title = 'Pausar Música';
                tocando = true;
                localStorage.setItem('musicTocando', 'true');
            } else {
                audio.pause();
                playBtn.textContent = '▶';
                playBtn.title = 'Reproduzir Música';
                tocando = false;
                localStorage.setItem('musicTocando', 'false');
            }
        };
        audio.addEventListener('ended', function() {
            playBtn.textContent = '▶';
            playBtn.title = 'Reproduzir Música';
            tocando = false;
        });

        // Slider de volume
        const volLabel = document.createElement('span');
        volLabel.textContent = 'Volume:';
        volLabel.style.color = '#00bfff';
        volLabel.style.marginLeft = '10px';
        const volSlider = document.createElement('input');
        volSlider.type = 'range';
        volSlider.min = 0;
        volSlider.max = 1;
        volSlider.step = 0.01;
        volSlider.value = 0.5;
        volSlider.style.width = '90px';
        volSlider.style.marginLeft = '6px';
        volSlider.addEventListener('input', function() {
            audio.volume = this.value;
        });
        playerDiv.appendChild(label);
        playerDiv.appendChild(playBtn);
        playerDiv.appendChild(audio);
        playerDiv.appendChild(volLabel);
        playerDiv.appendChild(volSlider);
        // Adiciona no canto da tela
        document.body.appendChild(playerDiv);
        
        // Verifica se a música deve tocar (padrão é true se não teve interação anterior)
        const musicTocandoAntes = localStorage.getItem('musicTocando') !== 'false';
        
        // Define o estado inicial do botão
        if (musicTocandoAntes) {
            playBtn.textContent = '⏸';
            playBtn.title = 'Pausar Música';
        } else {
            playBtn.textContent = '▶';
            playBtn.title = 'Reproduzir Música';
        }
        
        // Toca a música assim que o áudio estiver pronto
        audio.addEventListener('canplay', function playWhenReady() {
            if (musicTocandoAntes) {
                audio.play().catch(err => {
                    console.log('Autoplay bloqueado:', err);
                });
            }
            audio.removeEventListener('canplay', playWhenReady);
        });
        
        // Tenta tocar imediatamente também
        setTimeout(() => {
            if (musicTocandoAntes) {
                audio.play().catch(err => {
                    console.log('Autoplay não permitido:', err);
                });
            }
        }, 100);
    }
});
// Adiciona select de modo de jogo
window.addEventListener('DOMContentLoaded', function() {
    let modoSelect = document.getElementById('modoJogo');
    if (!modoSelect) {
        // Cria um grupo estilizado igual aos selects de time
        const modoGroup = document.createElement('div');
        modoGroup.className = 'team-select-group';
        modoGroup.style.marginBottom = '18px';
        modoGroup.style.marginTop = '10px';
        const label = document.createElement('label');
        label.setAttribute('for', 'modoJogo');
        label.textContent = 'Modo de Jogo:';
        modoSelect = document.createElement('select');
        modoSelect.id = 'modoJogo';
        modoSelect.innerHTML = '<option value="2p">2 Jogadores</option><option value="cpu">Contra a Máquina</option>';
        modoGroup.appendChild(label);
        modoGroup.appendChild(modoSelect);
        const container = document.querySelector('.main-container') || document.body;
        container.insertBefore(modoGroup, container.firstChild);
    }
});

// Inicializa o sistema de histórico
window.addEventListener('DOMContentLoaded', function() {
    // Cria o botão de histórico
    if (!document.getElementById('historico-btn')) {
        const historicoBtn = document.createElement('button');
        historicoBtn.id = 'historico-btn';
        historicoBtn.innerHTML = '<i class="bi bi-clock-history"></i> Histórico';
        document.body.appendChild(historicoBtn);

        // Cria o overlay do histórico
        const historicoOverlay = document.createElement('div');
        historicoOverlay.className = 'historico-overlay';
        historicoOverlay.id = 'historicoOverlay';

        const historicoModal = document.createElement('div');
        historicoModal.className = 'historico-modal';

        const historicoHeader = document.createElement('div');
        historicoHeader.className = 'historico-header';

        const historicoTitle = document.createElement('h2');
        historicoTitle.textContent = 'Histórico de Partidas';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'historico-close';
        closeBtn.innerHTML = '<i class="bi bi-x"></i>';
        closeBtn.onclick = () => historicoOverlay.classList.remove('show');

        historicoHeader.appendChild(historicoTitle);
        historicoHeader.appendChild(closeBtn);

        // Cria os abas (tabs)
        const historicoTabs = document.createElement('div');
        historicoTabs.className = 'historico-tabs';

        const tabHistorico = document.createElement('button');
        tabHistorico.className = 'historico-tab-btn active';
        tabHistorico.innerHTML = '<i class="bi bi-clock-history"></i> Partidas';
        tabHistorico.id = 'tab-historico';

        const tabCampeoes = document.createElement('button');
        tabCampeoes.className = 'historico-tab-btn';
        tabCampeoes.innerHTML = '<i class="bi bi-trophy"></i> Campeões';
        tabCampeoes.id = 'tab-campeoes';

        historicoTabs.appendChild(tabHistorico);
        historicoTabs.appendChild(tabCampeoes);

        // Seção de Histórico
        const historicoContent = document.createElement('div');
        historicoContent.className = 'historico-tab-content active';
        historicoContent.id = 'content-historico';

        const historicoLista = document.createElement('div');
        historicoLista.className = 'historico-lista';
        historicoLista.id = 'historicoLista';

        const historicoBotoes = document.createElement('div');
        historicoBotoes.className = 'historico-botoes';

        const limparBtn = document.createElement('button');
        limparBtn.className = 'limpar-btn';
        limparBtn.textContent = 'Limpar Histórico';
        limparBtn.onclick = () => {
            // Cria modal de confirmação customizado
            const confirmModal = document.createElement('div');
            confirmModal.className = 'confirm-modal';
            confirmModal.innerHTML = `
                <div class="confirm-content">
                    <h3>⚠️ Limpar Histórico</h3>
                    <p>Deseja realmente limpar todo o histórico de partidas?</p>
                    <p style="font-size: 0.9em; color: #888; margin-top: 8px;">Esta ação não pode ser desfeita.</p>
                    <div class="confirm-botoes">
                        <button class="confirm-cancel">Cancelar</button>
                        <button class="confirm-ok">Limpar Tudo</button>
                    </div>
                </div>
            `;
            document.body.appendChild(confirmModal);
            
            // Anima o modal
            setTimeout(() => confirmModal.classList.add('show'), 10);
            
            const cancelBtn = confirmModal.querySelector('.confirm-cancel');
            const okBtn = confirmModal.querySelector('.confirm-ok');
            
            const fecharModal = () => {
                confirmModal.classList.remove('show');
                setTimeout(() => confirmModal.remove(), 300);
            };
            
            cancelBtn.onclick = fecharModal;
            okBtn.onclick = () => {
                Historico.limpar();
                atualizarHistorico();
                if (window.atualizarTabelaCampeoes) {
                    window.atualizarTabelaCampeoes();
                }
                fecharModal();
            };
            
            confirmModal.onclick = (e) => {
                if (e.target === confirmModal) fecharModal();
            };
        };

        historicoBotoes.appendChild(limparBtn);
        historicoContent.appendChild(historicoLista);
        historicoContent.appendChild(historicoBotoes);

        // Seção de Campeões
        const campoesContent = document.createElement('div');
        campoesContent.className = 'historico-tab-content';
        campoesContent.id = 'content-campeoes';

        campoesContent.innerHTML = `
            <table class="campeoes-tabela" style="margin-top: 10px; width: 100%;">
                <thead>
                    <tr>
                        <th style="width: 40px;">🏆</th>
                        <th style="text-align: center;">Escudo</th>
                        <th style="text-align: center;">Time</th>
                        <th style="text-align: center;">Vitórias</th>
                        <th style="text-align: center;">Empates</th>
                    </tr>
                </thead>
                <tbody id="campoesBody">
                    <tr class="campeoes-vazio">
                        <td colspan="5">Nenhuma partida jogada ainda</td>
                    </tr>
                </tbody>
            </table>
        `;

        // Controla as abas
        tabHistorico.onclick = () => {
            historicoContent.classList.add('active');
            campoesContent.classList.remove('active');
            tabHistorico.classList.add('active');
            tabCampeoes.classList.remove('active');
        };

        tabCampeoes.onclick = () => {
            campoesContent.classList.add('active');
            historicoContent.classList.remove('active');
            tabCampeoes.classList.add('active');
            tabHistorico.classList.remove('active');
            if (window.atualizarTabelaCampeoes) {
                window.atualizarTabelaCampeoes();
            }
        };

        historicoModal.appendChild(historicoHeader);
        historicoModal.appendChild(historicoTabs);
        historicoModal.appendChild(historicoContent);
        historicoModal.appendChild(campoesContent);

        historicoOverlay.appendChild(historicoModal);
        document.body.appendChild(historicoOverlay);
        
        // Aplica traduções ao histórico após criação
        const idiomaAtual = document.getElementById('idiomaSelect')?.value || 'br';
        setTimeout(() => {
            if (window.atualizarBotoesHistorico) {
                window.atualizarBotoesHistorico(idiomaAtual);
            }
        }, 50);

        // Função para atualizar a exibição do histórico
        window.atualizarHistorico = function() {
            const historico = Historico.obter();
            const lista = document.getElementById('historicoLista');
            const idiomaAtual = document.getElementById('idiomaSelect')?.value || 'br';
            const t = traducoes[idiomaAtual] || traducoes.br;
            lista.innerHTML = '';

            if (historico.length === 0) {
                const empty = document.createElement('div');
                empty.className = 'historico-empty';
                empty.textContent = t.nenhumaPartida;
                lista.appendChild(empty);
            } else {
                historico.forEach((item, index) => {
                    const historicoItem = document.createElement('div');
                    historicoItem.className = 'historico-item';
                    
                    // Traduz o resultado
                    let resultadoTexto = item.resultado;
                    if (item.resultado === 'Empate') {
                        historicoItem.classList.add('empate');
                        resultadoTexto = t.empate;
                    } else if (item.resultado.includes('Venceu')) {
                        // Extrai o nome do time e traduz a palavra "Venceu"
                        const partes = item.resultado.split(' Venceu');
                        resultadoTexto = partes[0] + ' ' + t.venceu;
                    }

                    const resultado = document.createElement('div');
                    resultado.className = 'historico-item-resultado';
                    resultado.textContent = resultadoTexto;

                    const times = document.createElement('div');
                    times.className = 'historico-item-time';
                    times.textContent = `${item.time1} vs ${item.time2}`;

                    const data = document.createElement('div');
                    data.className = 'historico-item-data';
                    data.textContent = item.timestamp;

                    historicoItem.appendChild(resultado);
                    historicoItem.appendChild(times);
                    historicoItem.appendChild(data);

                    lista.appendChild(historicoItem);
                });
            }
        };

        // Abre o histórico ao clicar no botão
        historicoBtn.onclick = () => {
            historicoOverlay.classList.add('show');
            atualizarHistorico();
        };

        // Fecha o histórico ao clicar fora do modal
        historicoOverlay.onclick = (e) => {
            if (e.target === historicoOverlay) {
                historicoOverlay.classList.remove('show');
            }
        };

        // Atualiza histórico ao carregar
        atualizarHistorico();
    }
});




function showTrophyAnimation(teamImg, winner) {
    const overlay = document.createElement('div');
    overlay.className = 'trophy-overlay';
    overlay.id = 'trophyOverlay';
            // Busca o nome do time campeão
            function getTeamNameByImg(imgPath) {
                    const found = teamImages.find(t => t.arquivo === imgPath);
                    return found ? found.nome : '';
            }
            const nomeTime = getTeamNameByImg(teamImg);
            overlay.innerHTML = `
                <div class="trophy-anim">
                    <img src="static/img/taca_champions.png" alt="Taça da Champions" class="trophy-img">
                    <img src="${teamImg}" alt="Time vencedor" class="trophy-winner-img">
                    <div class="trophy-label">${nomeTime} Campeão!</div>
                </div>
            `;
    document.body.appendChild(overlay);
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 70,
            origin: { x: 0, y: 0.7 }
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 0.7 }
        });
    }
    setTimeout(() => {
        overlay.remove();
    }, 3500);
}

let divElemento = document.querySelector('#info');
let tabelaElemento = document.querySelector('#tabuleiro');

// Lista de imagens dos times
const teamImages = [
    { nome: 'Manchester City', arquivo: 'static/img/Manchester_City_Football_Club.png' },
    { nome: 'Barcelona', arquivo: 'static/img/barca.png' },
    { nome: 'Manchester United', arquivo: 'static/img/manchester_united.png' },
    { nome: 'Real Madrid', arquivo: 'static/img/realmadrid.png' }
];

// Sistema de Histórico
let Historico = {
    salvar: function(resultado) {
        let historico = JSON.parse(localStorage.getItem('jogoHistorico')) || [];
        const novoRegistro = {
            timestamp: new Date().toLocaleString('pt-BR'),
            resultado: resultado.resultado,
            time1: resultado.time1,
            time2: resultado.time2,
            imgTime1: resultado.imgTime1,
            imgTime2: resultado.imgTime2
        };
        historico.unshift(novoRegistro);
        // Mantém apenas os últimos 50 resultados
        if (historico.length > 50) {
            historico = historico.slice(0, 50);
        }
        localStorage.setItem('jogoHistorico', JSON.stringify(historico));
        // Atualiza a tabela de campeões após salvar
        if (window.atualizarTabelaCampeoes) {
            window.atualizarTabelaCampeoes();
        }
    },
    obter: function() {
        return JSON.parse(localStorage.getItem('jogoHistorico')) || [];
    },
    limpar: function() {
        localStorage.removeItem('jogoHistorico');
    }
};

// Objeto para rastrear campeões
let Campeoes = {
    calcularRanking: function() {
        const historico = Historico.obter();
        const ranking = {};
        
        historico.forEach(item => {
            // Conta vitórias
            if (item.resultado && item.resultado.includes('Venceu')) {
                const vencedor = item.resultado.split(' Venceu')[0];
                if (!ranking[vencedor]) {
                    // Encontra a imagem do time vencedor
                    let imgVencedor = '';
                    if (vencedor === item.time1) {
                        imgVencedor = item.imgTime1;
                    } else if (vencedor === item.time2) {
                        imgVencedor = item.imgTime2;
                    }
                    ranking[vencedor] = { vitórias: 0, empates: 0, imagem: imgVencedor };
                }
                ranking[vencedor].vitórias++;
            }
            // Conta empates
            else if (item.resultado === 'Empate') {
                [item.time1, item.time2].forEach((time, idx) => {
                    if (!ranking[time]) {
                        ranking[time] = { 
                            vitórias: 0, 
                            empates: 0, 
                            imagem: idx === 0 ? item.imgTime1 : item.imgTime2
                        };
                    }
                    ranking[time].empates++;
                });
            }
        });
        
        // Converte para array e ordena por vitórias decrescentes
        return Object.entries(ranking)
            .map(([nome, stats]) => ({ nome, ...stats }))
            .sort((a, b) => {
                if (b.vitórias !== a.vitórias) {
                    return b.vitórias - a.vitórias;
                }
                return b.empates - a.empates;
            });
    }
};

// Função para atualizar a tabela de campeões
window.atualizarTabelaCampeoes = function() {
    const ranking = Campeoes.calcularRanking();
    const tbody = document.getElementById('campoesBody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Obtém o idioma atual para traduções
    const idiomaAtual = document.getElementById('idiomaSelect')?.value || 'br';
    const t = window.traducoes?.[idiomaAtual] || {};
    
    if (ranking.length === 0) {
        tbody.innerHTML = `<tr class="campeoes-vazio"><td colspan="5">${t.nenhumaPartida || 'Nenhuma partida jogada ainda'}</td></tr>`;
        return;
    }
    
    const medals = ['🥇', '🥈', '🥉'];
    
    ranking.forEach((campeao, index) => {
        const tr = document.createElement('tr');
        const medal = medals[index] || '⭐';
        
        // Traduz o nome do time se houver tradução
        const nomeTimeTraduzido = t[campeao.nome] || campeao.nome;
        
        tr.innerHTML = `
            <td style="text-align: center; font-weight: bold;">${medal}</td>
            <td style="text-align: center;">
                <img src="${campeao.imagem}" alt="${campeao.nome}" title="${nomeTimeTraduzido}" style="width: 50px; height: 50px; object-fit: contain; border-radius: 4px;">
            </td>
            <td style="text-align: center; font-weight: bold; color: #00bfff;">${nomeTimeTraduzido}</td>
            <td style="text-align: center; color: #ffd700; font-weight: bold;">${campeao.vitórias}</td>
            <td style="text-align: center; color: #00bfff;">${campeao.empates}</td>
        `;
        
        tbody.appendChild(tr);
    });
};

// Chama atualização inicial quando a página carrega
window.addEventListener('load', () => {
    setTimeout(() => {
        window.atualizarTabelaCampeoes?.();
    }, 100);
});

// Objeto principal do jogo
let Game = {
    // Memória de sequências vencedoras do CPU
    cpuMemory: [],
    cpuCurrentMoves: [],
    modo: '2p', // '2p' ou 'cpu'
    teamImgs: { 'X': teamImages[0].arquivo, 'O': teamImages[1].arquivo },
    setTeam: function(player, imgPath, skipImgUpdate) {
        this.teamImgs[player] = imgPath;
        if (!skipImgUpdate) {
            const imgEl = player === 'X' ? document.getElementById('imgX') : document.getElementById('imgO');
            if (imgEl) {
                imgEl.src = imgPath;
                imgEl.style.display = '';
                imgEl.classList.remove('team-animate');
                void imgEl.offsetWidth;
                imgEl.classList.add('team-animate');
                playTeamAudio(imgPath);
            }
        }
        this.render();
    },
    setModo: function(modo) {
        this.modo = modo;
        this.start();
    },
    start: function() {
        this.field = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = this.startingPlayer || 'X';
        this.isFinished = false;
        this.round = 0;
        this.winner = null;
        this.cpuCurrentMoves = [];
        this.render();
    },
    setStartingPlayer: function(player) {
        this.startingPlayer = player;
        this.start();
    },
    getTeamName: function(player) {
        const imgPath = this.teamImgs[player];
        const team = teamImages.find(t => t.arquivo === imgPath);
        return team ? team.nome : 'Time';
    },
    nextPlayer: function() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },
    selfField: function(linha, coluna) {
        if (!this.isFinished && this.field[linha][coluna] === '') {
            this.field[linha][coluna] = this.currentPlayer;
            this.round++;
            // Memoriza jogada do CPU
            if (this.modo === 'cpu' && this.currentPlayer === 'O') {
                this.cpuCurrentMoves.push([linha, coluna]);
            }
            let ganhador = this.isGameOver();
            if (ganhador) {
                this.isFinished = true;
                this.winner = ganhador;
                // Se CPU venceu, salva sequência
                if (this.modo === 'cpu' && ganhador === 'O' && this.cpuCurrentMoves.length > 0) {
                    this.cpuMemory.push([...this.cpuCurrentMoves]);
                }
                // Salva no histórico
                if (ganhador === 'X' || ganhador === 'O') {
                    const vencedor = ganhador === 'X' ? this.getTeamName('X') : this.getTeamName('O');
                    const perdedor = ganhador === 'X' ? this.getTeamName('O') : this.getTeamName('X');
                    Historico.salvar({
                        resultado: `${vencedor} Venceu`,
                        time1: this.getTeamName('X'),
                        time2: this.getTeamName('O'),
                        imgTime1: this.teamImgs['X'],
                        imgTime2: this.teamImgs['O']
                    });
                } else if (ganhador === 'Deu velha, malandro!') {
                    Historico.salvar({
                        resultado: 'Empate',
                        time1: this.getTeamName('X'),
                        time2: this.getTeamName('O'),
                        imgTime1: this.teamImgs['X'],
                        imgTime2: this.teamImgs['O']
                    });
                }
                if ((ganhador === 'X' || ganhador === 'O') && !document.getElementById('trophyOverlay')) {
                    showTrophyAnimation(this.teamImgs[ganhador], ganhador);
                }
                if (ganhador === 'X' || ganhador === 'O') {
                    this.showConfetti();
                }
            } else {
                this.nextPlayer();
                if (this.modo === 'cpu' && this.currentPlayer === 'O' && !this.isFinished) {
                    setTimeout(() => { Game.cpuMove(); }, 500);
                }
            }
            this.render();
        }
    },
    cpuMove: function() {
        // 1. Tenta vencer
        let jogada = this.findWinningMove('O');
        if (jogada) {
            this.selfField(jogada[0], jogada[1]);
            return;
        }
        // 2. Tenta bloquear o adversário
        jogada = this.findWinningMove('X');
        if (jogada) {
            this.selfField(jogada[0], jogada[1]);
            return;
        }
        // 3. Tenta seguir uma sequência vencedora já memorizada
        for (let seq of this.cpuMemory) {
            let podeSeguir = true;
            for (let k = 0; k < this.cpuCurrentMoves.length; k++) {
                if (!seq[k] || seq[k][0] !== this.cpuCurrentMoves[k][0] || seq[k][1] !== this.cpuCurrentMoves[k][1]) {
                    podeSeguir = false;
                    break;
                }
            }
            if (podeSeguir && seq[this.cpuCurrentMoves.length]) {
                const [linha, coluna] = seq[this.cpuCurrentMoves.length];
                if (this.field[linha][coluna] === '') {
                    this.selfField(linha, coluna);
                    return;
                }
            }
        }
        // 4. Se não conseguir seguir sequência, joga aleatório
        let vazias = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] === '') vazias.push([i, j]);
            }
        }
        if (vazias.length > 0) {
            const [linha, coluna] = vazias[Math.floor(Math.random() * vazias.length)];
            this.selfField(linha, coluna);
        }
    },

    // Retorna [linha, coluna] se houver jogada vencedora para o símbolo, senão null
    findWinningMove: function(simbolo) {
        // Checa linhas e colunas
        for (let i = 0; i < 3; i++) {
            // Linha
            let linha = this.field[i];
            if (linha.filter(c => c === simbolo).length === 2 && linha.includes('')) {
                return [i, linha.indexOf('')];
            }
            // Coluna
            let col = [this.field[0][i], this.field[1][i], this.field[2][i]];
            if (col.filter(c => c === simbolo).length === 2 && col.includes('')) {
                return [col.indexOf(''), i];
            }
        }
        // Diagonal principal
        let diag = [this.field[0][0], this.field[1][1], this.field[2][2]];
        if (diag.filter(c => c === simbolo).length === 2 && diag.includes('')) {
            let idx = diag.indexOf('');
            return [idx, idx];
        }
        // Diagonal secundária
        let diag2 = [this.field[0][2], this.field[1][1], this.field[2][0]];
        if (diag2.filter(c => c === simbolo).length === 2 && diag2.includes('')) {
            let idx = diag2.indexOf('');
            return [idx, 2 - idx];
        }
        return null;
    },
    isGameOver: function() {
        const f = this.field;
        for (let i = 0; i < 3; i++) {
            if (f[i][0] && f[i][0] === f[i][1] && f[i][1] === f[i][2]) return f[i][0];
            if (f[0][i] && f[0][i] === f[1][i] && f[1][i] === f[2][i]) return f[0][i];
        }
        if (f[0][0] && f[0][0] === f[1][1] && f[1][1] === f[2][2]) return f[0][0];
        if (f[0][2] && f[0][2] === f[1][1] && f[1][1] === f[2][0]) return f[0][2];
        if (this.round === 9) return "Deu velha, malandro!";
        return null;
    },
    render: function() {
        const ganhador = this.winner;
        let nomeGanhador = ganhador;
        function getTeamNameByImg(imgPath) {
            const found = teamImages.find(t => t.arquivo === imgPath);
            return found ? found.nome : '';
        }
        // Tradução dinâmica
        let idioma = document.getElementById('idiomaSelect')?.value || 'br';
        const t = (window.traducoes && window.traducoes[idioma]) ? window.traducoes[idioma] : {
            ganhador: 'Ganhador:',
            jogAtual: 'Jogador Atual:'
        };
        if (ganhador === 'X') nomeGanhador = `${getTeamNameByImg(this.teamImgs['X'])} <img src="${this.teamImgs['X']}" alt="X" class="team-img" style="height:32px;vertical-align:middle">`;
        if (ganhador === 'O') nomeGanhador = `${getTeamNameByImg(this.teamImgs['O'])} <img src="${this.teamImgs['O']}" alt="O" class="team-img" style="height:32px;vertical-align:middle">`;
        divElemento.innerHTML = ganhador ? `${t.ganhador} ${nomeGanhador}` : `${t.jogAtual} <img src="${this.teamImgs[this.currentPlayer]}" alt="${this.currentPlayer}" class="team-img" style="height:32px;vertical-align:middle">`;
        // Força atualização dos labels após render
        if (window.aplicarTraducoes) window.aplicarTraducoes(idioma);
        let template = '';
        this.field.forEach((linha, linhaIndex) => {
            template += "<tr>";
            linha.forEach((coluna, colunaIndex) => {
                const podeClicar = !this.isFinished && coluna === '';
                let conteudo = '';
                if (coluna === 'X' || coluna === 'O') {
                    conteudo = `<img src="${this.teamImgs[coluna]}" alt="${coluna}" class="team-img">`;
                }
                template += `<td ${podeClicar ? `onclick="Game.selfField(${linhaIndex}, ${colunaIndex})"` : ''}>${conteudo}</td>`;
            });
            template += "</tr>";
        });
        tabelaElemento.innerHTML = template;
    },
    showConfetti: function() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            console.warn('canvas-confetti não carregado.');
        }
    }
};

// Função para tocar áudio de torcida ao selecionar time
function playTeamAudio(imgPath) {
    let audioFile = 'static/audio/torcida.mp3';
    if (imgPath.includes('barca')) audioFile = 'static/audio/barcelona.mp3';
    else if (imgPath.includes('realmadrid')) audioFile = 'static/audio/realmadrid.mp3';
    else if (imgPath.includes('manchester_united')) audioFile = 'static/audio/manchesterunited.mp3';
    else if (imgPath.includes('Manchester_City')) audioFile = 'static/audio/mancity.mp3';

    // Testa se o arquivo existe, senão usa torcida.mp3
    fetch(audioFile, {method: 'HEAD'}).then(resp => {
        if (!resp.ok) audioFile = 'static/audio/torcida.mp3';
        tocar(audioFile);
    }).catch(() => {
        tocar('static/audio/torcida.mp3');
    });

    function tocar(src) {
        if (window._teamAudio) {
            window._teamAudio.pause();
            window._teamAudio.currentTime = 0;
        }
        window._teamAudio = new Audio(src);
        window._teamAudio.volume = 0.7;
        // Toca 5 segundos a partir do meio do áudio
        window._teamAudio.addEventListener('loadedmetadata', function startFromMiddle() {
            const dur = window._teamAudio.duration;
            if (isFinite(dur) && dur > 3) {
                window._teamAudio.currentTime = dur / 2 - 2.5;
            }
            window._teamAudio.removeEventListener('loadedmetadata', startFromMiddle);
        });
        // Fade out nos últimos 0.7s
        let fadeStarted = false;
        window._teamAudio.addEventListener('timeupdate', function limitAudio() {
            const dur = window._teamAudio.duration;
            let meio = dur > 5 ? dur / 2 - 2.5 : 0;
            let fim = meio + 5;
            if (!fadeStarted && window._teamAudio.currentTime >= fim - 0.7) {
                fadeStarted = true;
                let fade = setInterval(() => {
                    if (window._teamAudio.volume > 0.05) {
                        window._teamAudio.volume -= 0.07;
                    } else {
                        window._teamAudio.volume = 0;
                        clearInterval(fade);
                    }
                }, 50);
            }
            if (window._teamAudio.currentTime >= fim) {
                window._teamAudio.pause();
                window._teamAudio.currentTime = 0;
                window._teamAudio.removeEventListener('timeupdate', arguments.callee);
            }
        });
        // Só tenta tocar se já houve interação do usuário
        if (window._audioAllowed || document.body.classList.contains('audio-allowed')) {
            window._teamAudio.play();
        }
    }
}

// Garante que o áudio será tocado após interação do usuário
window.addEventListener('click', function allowAudioOnce() {
    const audio = document.getElementById('lalalaAudio');
    if (audio) {
        audio.play().catch(err => console.log('Autoplay:', err));
        // Salva que a música deverá tocar
        localStorage.setItem('musicTocando', 'true');
        // Atualiza botão
        const playBtn = document.querySelector('#musicPlayer button');
        if (playBtn && !audio.paused) {
            playBtn.textContent = '⏸';
            playBtn.title = 'Pausar Música';
        }
    }
    window._audioAllowed = true;
    document.body.classList.add('audio-allowed');
}, { once: true });

// Inicializa selects e imagens ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    // Atualiza modo de jogo ao trocar select
    const modoSelect = document.getElementById('modoJogo');
    if (modoSelect) {
        modoSelect.addEventListener('change', function() {
            Game.setModo(this.value);
        });
        Game.setModo(modoSelect.value);
    }
    const teamX = document.getElementById('teamX');
    const teamO = document.getElementById('teamO');
    const imgX = document.getElementById('imgX');
    const imgO = document.getElementById('imgO');
    if (teamX && teamO && imgX && imgO) {
        teamImages.forEach(function(img) {
            const optX = document.createElement('option');
            optX.value = img.arquivo;
            optX.textContent = img.nome;
            teamX.appendChild(optX);
            const optO = document.createElement('option');
            optO.value = img.arquivo;
            optO.textContent = img.nome;
            teamO.appendChild(optO);
        });
        teamX.selectedIndex = 0;
        teamO.selectedIndex = 1;
        Game.setTeam('X', teamX.value, true);
        Game.setTeam('O', teamO.value, true);
        imgX.src = teamX.value;
        imgX.style.display = '';
        imgO.src = teamO.value;
        imgO.style.display = '';
        // Função para bloquear seleção duplicada
        function updateTeamOptions() {
            const xValue = teamX.value;
            const oValue = teamO.value;
            // Habilita todas opções primeiro
            Array.from(teamX.options).forEach(opt => opt.disabled = false);
            Array.from(teamO.options).forEach(opt => opt.disabled = false);
            // Desabilita a opção escolhida no outro select
            Array.from(teamX.options).forEach(opt => { if (opt.value === oValue) opt.disabled = true; });
            Array.from(teamO.options).forEach(opt => { if (opt.value === xValue) opt.disabled = true; });
        }
        updateTeamOptions();
        teamX.addEventListener('change', function() {
            Game.setTeam('X', this.value);
            imgX.src = this.value;
            imgX.style.display = '';
            imgX.classList.remove('team-animate');
            void imgX.offsetWidth;
            imgX.classList.add('team-animate');
            playTeamAudio(this.value);
            updateTeamOptions();
        });
        teamO.addEventListener('change', function() {
            Game.setTeam('O', this.value);
            imgO.src = this.value;
            imgO.style.display = '';
            imgO.classList.remove('team-animate');
            void imgO.offsetWidth;
            imgO.classList.add('team-animate');
            playTeamAudio(this.value);
            updateTeamOptions();
        });
    }
    Game.start();
    
    // Event listener para o botão de reinício
    const btnReiniciar = document.getElementById('btnReiniciar');
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', function() {
            Game.start();
        });
    }
});

Game.start();